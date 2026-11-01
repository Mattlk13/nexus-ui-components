# Design-system integration

The source imports `nexus-design-system` by package name. The build dependency is the owner's public MIT repository pinned to revision `7cef47f83b765515d43cba657e725e2771e14611`; its required tokens are compiled into both distribution formats. Consumers retain the existing React/Lucide peer dependencies and need no JSX loader for the packaged root entry.

`npm test` builds ESM/CommonJS artifacts and renders real consumer components using React 18.3.1 and the pinned design tokens. `npm pack --dry-run --ignore-scripts` verifies the artifact contents. The design-system MIT notice is included under `licenses/`.

No package publication or downstream application migration is performed by this branch. React 19 compatibility, complete-page keyboard/screen-reader behavior, focus handling, contrast and visual acceptance remain separate adoption gates. The existing peer range is not expanded by these tests.
