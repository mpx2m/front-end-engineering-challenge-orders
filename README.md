<img src="resources/logo.png" width="320" />

### Brief

Front-end Engineering Challenge

### Technical Stack

- [Next.js](https://nextjs.org/) ｜ [styled-components](https://styled-components.com/)｜ [Zustand](https://zustand-demo.pmnd.rs/)｜ [Socket.IO](https://socket.io/)

### Dev and Preview

#### Prerequisite

Before run the project, the original `server.js` should be run for sending data

#### Main Scripts

```bash
# for dependencies
pnpm i
```

```bash
# start in dev mode, bad performance as using development build of React
pnpm dev
```

```bash
# build the project, needed before run in prod mode
pnpm build

# start in prod mode (recommended), due to better performance for preview
pnpm start
```

### Project Structure

```text
.
├── .next                             build artefact
├── app                               Next.js app routing architecture dir
│    ├── _components                  '/' page components
│    ├── _components-layout           '/' layout components
│    ├── _data                        '/' data
│    ├── analysis                     blank page (for demo)
│    ├── restaurants                  blank page (for demo)
│    ├── globals.css                  project globals CSS
│    ├── layout.tsx                   project root layout
│    └── page.tsx                     '/' page (order page)
├── components                        project scope common components
│    └── theme.ts                     project CSS simple theme
├── lib	                              helper functions and libraries
│    ├── registry.tsx                 styled-components-registry
│    ├── socket                       Socket.IO client
│    └── store                        Zustand store
├── public                            frontend resource
│    └── images                       images resource
├── resources                         md resource
│
```

### Project Conventions

1. Component filenames should use Kebab-case format, e.g., `order-event-table.tsx`
2. Component CSS styles should be written using styled-components and stored in the same file as the component
3. Component's props interface should be included in the same `.tsx` file as the component or placed in a `props.ts` file in the same directory
4. Common project components should be stored in the root `components` directory and named `index.tsx`
5. Use a preceding underscore `_` to prevent directories from being recognized by Next.js app routing
6. Use `_components` and `_components-layout` directories for components specific to the current page
7. Use Zustand for global state management
