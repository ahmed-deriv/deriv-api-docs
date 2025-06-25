# Task: Migrate from Docusaurus to Standalone React 18 Application

**Task ID:** MIGRATE-001
**Priority:** HIGH
**Type:** MIGRATION

## Description
Remove Docusaurus framework and its dependencies from the current deriv-api-docs project and convert it to a standalone React 18 application. This migration should preserve all existing functionality, components, and content while eliminating the Docusaurus build system and replacing it with a custom React application setup.

## Requirements
- Remove ONLY Docusaurus-specific packages and dependencies (preserve all other existing packages)
- Remove the entire `docs/` folder and its markdown-based documentation structure
- Set up a standalone React 18 application with modern tooling
- Migrate existing React components from src/ directory
- Convert Docusaurus-specific configurations to React equivalents
- Migrate documentation content from `docs/` folder to React components/pages
- Implement custom routing to replace Docusaurus navigation
- Set up build system for production deployment
- Maintain existing styling and theming
- Preserve all API documentation and examples functionality
- Preserve all existing non-Docusaurus dependencies and their functionality
- Ensure all existing functionality remains intact

## Acceptance Criteria
- [ ] All Docusaurus packages removed from package.json
- [ ] Entire `docs/` folder removed from project structure
- [ ] React 18 application runs successfully with `npm start`
- [ ] All existing components in src/ directory work without Docusaurus dependencies
- [ ] Custom routing system implemented for navigation
- [ ] Documentation content from `docs/` folder converted to React components
- [ ] All documentation sections accessible (Core Concepts, Code Examples, Languages, Guides, etc.)
- [ ] Build system produces deployable static files
- [ ] All existing pages and routes accessible
- [ ] Styling and theming preserved from original design
- [ ] API examples and interactive features functional
- [ ] Search functionality implemented (replacing Docusaurus search)
- [ ] Responsive design maintained across all devices
- [ ] Performance metrics meet or exceed current benchmarks
- [ ] All tests updated and passing
- [ ] Development server hot-reload functionality working

## Technical Considerations
- Use Vite or Create React App as build tool replacement
- Implement React Router for client-side routing
- Replace MDX with custom markdown rendering solution
- Set up custom webpack configuration if needed
- Migrate Docusaurus theming to CSS modules or styled-components
- Implement custom search functionality (possibly with Fuse.js or Algolia)
- Set up proper TypeScript configuration for standalone React app
- Configure ESLint and Prettier for React-only environment
- Implement custom code syntax highlighting (replacing Prism from Docusaurus)
- Set up proper asset handling and optimization
- Configure environment variables for different deployment stages
- Ensure proper SEO meta tags and social sharing capabilities
- **CRITICAL**: Preserve all existing non-Docusaurus packages and their configurations
- Maintain compatibility with existing Deriv-specific packages (@deriv-com/*, @deriv/*)
- Keep all existing UI libraries, testing frameworks, and development tools intact

## Dependencies to Remove (ONLY Docusaurus-related)
- @docusaurus/core
- @docusaurus/preset-classic
- @docusaurus/plugin-client-redirects
- @docusaurus/theme-live-codeblock
- @docusaurus/module-type-aliases
- @docusaurus/tsconfig
- @easyops-cn/docusaurus-search-local
- docusaurus-plugin-sass
- @mdx-js/react (ONLY if exclusively used for Docusaurus)
- All markdown processing dependencies related to `docs/` folder

## Dependencies to PRESERVE (Do NOT remove)
- All @deriv-com/* packages (@deriv-com/analytics, @deriv-com/auth-client, @deriv-com/quill-ui)
- All @deriv/* packages (@deriv/deriv-api, @deriv/ui)
- All @radix-ui/* packages
- All existing React packages (react, react-dom, react-hook-form, etc.)
- All existing testing packages (jest, @testing-library/*, etc.)
- All existing development tools (eslint, prettier, typescript, etc.)
- All existing UI/styling packages (sass, clsx, etc.)
- All existing utility packages (moment, yup, etc.)

## Dependencies to Add
- React Router DOM for routing
- Vite or Webpack for bundling
- React Markdown or similar for markdown rendering
- Prism.js or Highlight.js for code syntax highlighting
- Search library (Fuse.js, MiniSearch, or Algolia)
- CSS-in-JS solution or CSS modules setup
- React Helmet for SEO meta management
- Build optimization tools

## Files to Modify/Remove
- Remove: docusaurus.config.js
- Remove: sidebars.js
- Remove: babel.config.js (if Docusaurus-specific)
- Remove: entire `docs/` folder and all its contents
- Modify: package.json (scripts and dependencies)
- Create: Custom routing configuration
- Create: Custom build configuration
- Modify: All components using Docusaurus-specific imports
- Create: Custom layout components
- Create: Custom navigation components
- Create: React components to replace documentation pages from `docs/` folder

## Additional Context
This migration is critical for gaining full control over the application architecture and removing dependency on the Docusaurus framework. The new React application should be more flexible, allowing for custom features and optimizations specific to the deriv-api-docs use case.

The migration should maintain backward compatibility for all existing URLs and ensure that the user experience remains consistent. Special attention should be paid to:

1. **Content Migration**: All content from the `docs/` folder should be converted to React components and properly rendered
2. **Documentation Structure**: Preserve the existing documentation hierarchy (Core Concepts, Code Examples, Languages, Guides, FAQ, etc.)
3. **Component Compatibility**: Existing React components should work with minimal changes
4. **Package Preservation**: All non-Docusaurus packages must remain unchanged and functional
5. **Styling Preservation**: Current design and theming should be maintained
6. **Performance**: The new application should load faster than the current Docusaurus setup
7. **SEO**: Ensure proper meta tags and social sharing capabilities
8. **Accessibility**: Maintain current accessibility standards
9. **URL Structure**: Maintain existing URL patterns for documentation sections

The implementation should follow React best practices and modern development patterns. Consider implementing:
- Code splitting for better performance
- Lazy loading for documentation pages
- Progressive Web App features
- Proper error boundaries
- Comprehensive testing coverage

This migration will provide a foundation for future enhancements and custom features that would be difficult to implement within the Docusaurus framework constraints.
