# Task: Remove 'docs' Folder and Dependencies from Docusaurus

**Task ID:** DOCS-REMOVE-001
**Priority:** MEDIUM
**Type:** REFACTOR

## Description
Remove the entire 'docs' folder and all its associated dependencies from the Docusaurus configuration. This includes cleaning up configuration files, removing documentation-related routes, updating navigation, and ensuring the application functions properly without the docs section.

## Requirements
- Complete removal of the 'docs' folder and all its contents
- Update Docusaurus configuration to remove docs-related settings
- Remove docs-related navigation items and redirects
- Clean up any references to docs paths in source code
- Update sidebar configuration to remove docs dependencies
- Ensure the application builds and runs successfully without docs
- Maintain functionality of other sections (API explorer, dashboard, etc.)
- Update any hardcoded links or references to docs content

## Acceptance Criteria
- [ ] 'docs' folder is completely removed from the project
- [ ] docusaurus.config.js is updated to remove docs preset configuration
- [ ] sidebars.js is updated to remove docs-related sidebar configuration
- [ ] Client redirects from '/docs' are removed or updated appropriately
- [ ] Navigation bar items referencing docs are removed or updated
- [ ] All hardcoded references to docs paths in source code are removed
- [ ] Application builds successfully without errors
- [ ] Application runs in development mode without docs-related errors
- [ ] No broken links or 404 errors related to docs paths
- [ ] Search functionality works without indexing docs content
- [ ] Internationalization (i18n) files are updated if they contain docs translations

## Technical Considerations
- The docs folder contains multiple subdirectories: _client-libraries, _faq, _terminology, code-examples, core-concepts, frameworks, guides, languages
- Key files to remove: intro.md, setting-up-a-deriv-application.md, _intro_backup.md
- Docusaurus preset-classic configuration includes docs settings that need removal
- Current redirect from '/docs' to '/docs/intro' needs to be handled
- Sidebar is currently auto-generated from docs folder structure
- Search plugin may be indexing docs content
- Check for any components that might reference docs paths
- Ensure no broken imports or dependencies after removal

## Dependencies
- Docusaurus core configuration (docusaurus.config.js)
- Sidebar configuration (sidebars.js)
- Navigation configuration in themeConfig
- Client redirects plugin configuration
- Search plugin configuration (@easyops-cn/docusaurus-search-local)
- Any React components referencing docs paths
- Internationalization files that may contain docs translations
- Build and deployment scripts that may reference docs

## Files and Directories to Remove
```
docs/
├── _client-libraries/
├── _faq/
├── _terminology/
├── code-examples/
├── core-concepts/
├── frameworks/
├── guides/
├── languages/
├── intro.md
├── setting-up-a-deriv-application.md
└── _intro_backup.md
```

## Configuration Changes Required

### docusaurus.config.js
- Remove or modify the docs configuration in preset-classic
- Remove redirect from '/docs' to '/docs/intro'
- Update navigation items if any reference docs

### sidebars.js
- Remove or update sidebar configuration that auto-generates from docs folder
- Handle tutorialSidebar configuration appropriately

### Source Code Updates
- Check src/components/ for any docs path references
- Update any hardcoded links in React components
- Remove docs-related navigation items

## Additional Context
This refactoring is part of restructuring the Deriv API documentation site to focus solely on the API explorer and related functionality. The removal of the docs section will simplify the site structure and reduce maintenance overhead.

The current site has multiple sections including API explorer, dashboard, and documentation. After this change, the site will focus on the API explorer and dashboard functionality while removing the traditional documentation structure.

Care must be taken to ensure that:
1. The API explorer functionality remains intact
2. User authentication and dashboard features continue to work
3. The site builds and deploys successfully
4. No broken links are introduced
5. The search functionality adapts to the new structure

The implementation should be done incrementally:
1. First, backup the current docs folder
2. Update configuration files
3. Remove docs folder
4. Test build and functionality
5. Fix any remaining issues or broken references

Consider the impact on SEO and existing bookmarks to docs pages, and implement appropriate redirects or error pages if needed.
