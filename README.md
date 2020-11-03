# Micro Frontend Service

Installing node_modules:

`npm install`

Run host-app with using command:

`npm run dev`

Bellow you can find description how to split with using _boilerplate_ and which order of development you should follow

### How to start project

1. You should rename all occurrences by name - mfServiceName to any name you need. 
2. Install dependencies by command 'yarn'.
3. Start your app by command 'yarn local' when you develop your app and by command 'yarn dev' when you check your connection with host app.  


### How to connect your app with host app

1. You should add files from 'src/hostAppFiles/*' to your host app.
2. Create new component in host app. Use 'src/hostAppFiles/example.tsx' for your mf-app container in host app.
3. Start your mf-app by command 'yarn dev'.

Enjoy!

### How to pass data between your apps 

You should use 'src/hostAppFiles/createDispatchEventToService' for call event and pass your data.
You should use 'src/hostAppFiles/useWindowEventListener' for subscribe event and get your data.

Don`t forget to unsubscribe from events when component will be unmounted.

### Applied Technology Stack

```
- React
- React app rewired
- Styled-components
- TypeScript
- Holism GPB UI
- ES Lint
- Prettier
```

### Available aliases

```
- @app          => root/src
- @assets       => root/src/assets
- @components   => root/src/components
- @constants    => root/src/constants
- @models       => root/src/models
- @service      => root/src/service
- @styles       => root/src/styles
```

### Branch naming rules

```
- feature/taskNumber-someDescription         => new development task
- bugfix/taskNumber-someDescription          => bug fix task in component
- hotfix/taskNumber-someDescription          => hotfix task in component
- release/releaseNumber                      => branch for deploy
```

For better understanding the micro frontend architecture follow the link on Medium:
[A Micro Frontend Solution for React](https://levelup.gitconnected.com/a-micro-frontend-solution-for-react-1914b19663b)
