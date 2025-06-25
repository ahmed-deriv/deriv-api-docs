# Prompt Agents System

A comprehensive multi-agent system for automated software development workflow management in Cline. This system orchestrates development, quality assurance, unit testing, and bug fixing through specialized AI agents.

## Overview

The Prompt Agents System consists of 5 specialized agents that work together to manage the complete software development lifecycle:

1. **Developer Agent** - Task analysis, planning, and implementation
2. **QA Agent** - Quality assurance and testing verification
3. **Unit Test Agent** - Test coverage analysis and implementation
4. **Bug Fix Agent** - Bug analysis and resolution
5. **Workflow Coordinator** - Orchestrates the entire process

## System Architecture

```
Task Input → Developer Agent → Human Approval → Implementation
     ↓
QA Agent → Pass/Fail Decision
     ↓                    ↓
Unit Test Agent      Bug Fix Agent
     ↓                    ↓
Completion       → QA Re-evaluation
```

## Directory Structure

```
prompt-agents/
├── README.md                    # This file
├── developer-agent.md           # Development planning and implementation
├── qa-agent.md                 # Quality assurance and testing
├── unit-test-agent.md          # Unit test coverage and implementation
├── bug-fix-agent.md            # Bug analysis and resolution
├── workflow-coordinator.md      # Master workflow orchestration
├── input/                      # Task input directory
└── logs/                       # Process documentation
    ├── milestones.md           # Milestone tracking
    ├── bug-reports.md          # Bug report tracking
    └── qa-reports.md           # QA evaluation tracking
```

## Getting Started

### 1. Task Input Format

Create task files in the `input/` directory with the following structure:

```markdown
# Task: [TASK_NAME]
**Task ID:** [UNIQUE_ID]
**Priority:** [HIGH/MEDIUM/LOW]
**Type:** [FEATURE/BUG_FIX/ENHANCEMENT/REFACTOR]

## Description
[Detailed description of what needs to be accomplished]

## Requirements
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Acceptance Criteria
- [ ] [Criteria 1]
- [ ] [Criteria 2]
- [ ] [Criteria 3]

## Technical Considerations
- [Any specific technical requirements or constraints]

## Dependencies
- [List any dependencies or prerequisites]

## Additional Context
[Any additional information that might be helpful]
```

### 2. Starting a Workflow

1. **Place Task File**: Add your task specification to `prompt-agents/input/`
2. **Load Workflow Coordinator**: In Cline, load the `workflow-coordinator.md` prompt
3. **Initialize Workflow**: The coordinator will detect the new task and begin orchestration
4. **Monitor Progress**: Check the logs in `prompt-agents/logs/` for real-time status

### 3. Agent Sequence

The typical workflow follows this sequence:

1. **Workflow Coordinator** initializes and manages the process
2. **Developer Agent** analyzes the task and creates an implementation plan
3. **Human Approval** is required before implementation begins
4. **Developer Agent** implements the approved plan
5. **QA Agent** performs comprehensive testing and verification
6. **Conditional Flow**:
   - If QA **PASSES**: → **Unit Test Agent** → **Completion**
   - If QA **FAILS**: → **Bug Fix Agent** → **QA Re-evaluation**

## Using Individual Agents

### Developer Agent
```bash
# Load the developer agent prompt in Cline
# Ensure task file exists in input/ directory
# Agent will analyze task and create implementation plan
# Wait for human approval before proceeding
```

### QA Agent
```bash
# Load after Developer Agent completes work
# Agent will perform comprehensive testing
# Results documented in logs/qa-reports.md
# Triggers next agent based on pass/fail status
```

### Unit Test Agent
```bash
# Load after QA Agent passes testing
# Agent analyzes code coverage and implements tests
# Results documented in logs/milestones.md
# Marks workflow as complete upon success
```

### Bug Fix Agent
```bash
# Load when QA Agent reports failures
# Agent analyzes bugs and implements fixes
# Results documented in logs/bug-reports.md
# Triggers QA re-evaluation after fixes
```

### Workflow Coordinator
```bash
# Master orchestrator for the entire process
# Load this agent to manage multi-agent workflows
# Handles state transitions and agent coordination
# Provides status reporting and error handling
```

## Documentation System

### Milestone Tracking (`logs/milestones.md`)
- Tracks progress across all agents and tasks
- Append-only format maintains complete audit trail
- Includes timestamps, task IDs, and agent tags

### Bug Reports (`logs/bug-reports.md`)
- Documents all bugs identified by QA Agent
- Tracks bug status from identification to resolution
- Includes severity, priority, and resolution details

### QA Reports (`logs/qa-reports.md`)
- Comprehensive testing results and evaluations
- Includes test coverage metrics and quality scores
- Documents both initial evaluations and re-evaluations

## Best Practices

### Task Definition
- Be specific and detailed in task descriptions
- Include clear acceptance criteria
- Specify technical constraints and dependencies
- Provide sufficient context for implementation

### Human Approval Process
- Review Developer Agent plans carefully
- Ask questions if anything is unclear
- Approve only when confident in the approach
- Provide feedback for plan improvements

### Monitoring Progress
- Regularly check log files for status updates
- Monitor for blockers or issues requiring intervention
- Review agent handoffs and state transitions
- Escalate critical issues promptly

### Quality Assurance
- Trust the QA Agent's evaluation process
- Review failed tests and bug reports carefully
- Ensure comprehensive testing before approval
- Validate fixes before final acceptance

## Troubleshooting

### Common Issues

#### Agent Not Responding
- Check if correct agent prompt is loaded
- Verify task input format is correct
- Ensure all required files and directories exist
- Review logs for error messages

#### Workflow Stuck
- Check current workflow state in logs
- Identify which agent is currently active
- Look for blockers or approval gates
- Use Workflow Coordinator to resume or restart

#### Quality Issues
- Review QA reports for specific failures
- Check bug reports for detailed issue descriptions
- Ensure Bug Fix Agent has addressed all issues
- Verify re-evaluation results

#### Documentation Problems
- Ensure agents are appending to log files correctly
- Check timestamp formats and task ID consistency
- Verify all required documentation is present
- Review agent handoff documentation

### Recovery Procedures

#### Workflow Restart
1. Assess current state from log files
2. Identify last successful checkpoint
3. Load appropriate agent for restart point
4. Resume workflow from checkpoint

#### Agent Failure Recovery
1. Document the failure and context
2. Identify root cause of failure
3. Load replacement agent or restart
4. Resume from last known good state

## Advanced Usage

### Custom Task Types
- Modify agent prompts for specific project needs
- Add custom validation rules and criteria
- Implement project-specific testing protocols
- Customize documentation formats

### Integration with CI/CD
- Automate task input from issue tracking systems
- Integrate with build and deployment pipelines
- Set up automated notifications and reporting
- Configure quality gates and approval processes

### Scaling for Large Projects
- Use task prioritization and batching
- Implement parallel workflow execution
- Set up dedicated environments for testing
- Configure resource allocation and scheduling

## Support and Maintenance

### Regular Maintenance
- Review and clean up old log entries periodically
- Update agent prompts based on lessons learned
- Optimize workflow processes for efficiency
- Update documentation and best practices

### Performance Monitoring
- Track workflow completion times
- Monitor agent performance and reliability
- Identify bottlenecks and optimization opportunities
- Measure quality metrics and improvement trends

## Contributing

To improve or extend the agent system:

1. Test changes thoroughly with sample tasks
2. Update documentation to reflect changes
3. Ensure backward compatibility with existing workflows
4. Follow established patterns and conventions
5. Document new features and capabilities

## Version History

- **v1.0** - Initial implementation with 5-agent system
- Core workflow orchestration
- Comprehensive documentation and logging
- Human approval gates and quality assurance
- Bug tracking and resolution workflow

---

For questions or issues, refer to the individual agent documentation files or review the troubleshooting section above.
