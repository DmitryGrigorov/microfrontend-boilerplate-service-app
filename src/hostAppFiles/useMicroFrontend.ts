import { useEffect, useState } from 'react';

export interface IMicroFrontendProps {
  id: string;
  host?: string;
}

const useMicroFrontend = ({ id, host }: IMicroFrontendProps) => {
  const scriptId = `${id}Bundle`;
  const [isLoaded, setLoaded] = useState<boolean>(!!window[id]);

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.addEventListener('load', handleLoad);

      return () => existingScript.removeEventListener('load', handleLoad);
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        const mainJsPath = manifest.files
          ? `${host}${manifest.files['main.js']}`
          : `${host}${manifest['main.js']}`;

        script.id = scriptId;
        script.crossOrigin = '';
        script.src = mainJsPath;
        script.onload = handleLoad;

        document.body.appendChild(script);
      });

    return;
  }, []);

  return { isLoaded, [id]: window[id] };
};

export default useMicroFrontend;
