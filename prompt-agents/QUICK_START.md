# Quick Start Guide - Prompt Agents System

Get up and running with the multi-agent development workflow in 5 minutes.

## 🚀 Quick Setup

### Step 1: Verify Structure
Ensure you have this directory structure:
```
prompt-agents/
├── README.md                    ✅ Complete documentation
├── QUICK_START.md              ✅ This guide
├── developer-agent.md           ✅ Development agent
├── qa-agent.md                 ✅ Quality assurance agent
├── unit-test-agent.md          ✅ Unit testing agent
├── bug-fix-agent.md            ✅ Bug fixing agent
├── workflow-coordinator.md      ✅ Master coordinator
├── input/                      ✅ Task input directory
│   └── sample-task.md          ✅ Example task
└── logs/                       ✅ Process tracking
    ├── milestones.md           ✅ Milestone tracking
    ├── bug-reports.md          ✅ Bug tracking
    └── qa-reports.md           ✅ QA tracking
```

### Step 2: Try the Sample Task
1. **Open Cline**
2. **Load the Workflow Coordinator**:
   - Copy the content from `prompt-agents/workflow-coordinator.md`
   - Paste it into Cline as your system prompt
3. **The coordinator will detect the sample task** in `input/sample-task.md`
4. **Follow the workflow** as it progresses through each agent

## 🎯 Basic Usage

### Option A: Use Workflow Coordinator (Recommended)
```bash
1. Load workflow-coordinator.md in Cline
2. Place task file in input/ directory
3. Let the coordinator manage the entire process
4. Monitor progress in logs/ directory
```

### Option B: Use Individual Agents
```bash
1. Load developer-agent.md → Create implementation plan
2. Get human approval → Proceed with development
3. Load qa-agent.md → Test and verify implementation
4. If QA passes → Load unit-test-agent.md
5. If QA fails → Load bug-fix-agent.md → Return to QA
```

## 📝 Creating Your First Task

Create a new file in `input/` directory:

```markdown
# Task: [Your Task Name]
**Task ID:** [UNIQUE-ID]
**Priority:** [HIGH/MEDIUM/LOW]
**Type:** [FEATURE/BUG_FIX/ENHANCEMENT]

## Description
[What needs to be built or fixed]

## Requirements
- [Requirement 1]
- [Requirement 2]

## Acceptance Criteria
- [ ] [Criteria 1]
- [ ] [Criteria 2]
```

## 🔄 Workflow States

Monitor these states in the logs:
- **INITIALIZED** → Task received
- **DEV_PLANNING** → Creating plan
- **DEV_APPROVED** → Plan approved, implementing
- **QA_TESTING** → Testing implementation
- **QA_PASSED** → Tests passed, unit testing
- **QA_FAILED** → Tests failed, fixing bugs
- **COMPLETED** → All done! ✅

## 📊 Monitoring Progress

Check these files for real-time status:
- `logs/milestones.md` - Overall progress
- `logs/qa-reports.md` - Testing results
- `logs/bug-reports.md` - Bug status

## ⚡ Pro Tips

1. **Start with the sample task** to understand the workflow
2. **Use descriptive task IDs** for easy tracking
3. **Be specific in requirements** for better results
4. **Review agent plans carefully** before approval
5. **Monitor logs regularly** for progress updates

## 🆘 Need Help?

- **Workflow stuck?** → Check current state in logs
- **Agent not responding?** → Verify correct prompt is loaded
- **Quality issues?** → Review QA reports for details
- **Documentation missing?** → Check if agents are updating logs

## 🎉 Success Indicators

You'll know it's working when:
- ✅ Agents update log files automatically
- ✅ Human approval gates work correctly
- ✅ QA testing provides detailed feedback
- ✅ Bug fixes trigger re-evaluation
- ✅ Unit tests achieve good coverage

## Next Steps

1. **Try the sample task** to see the full workflow
2. **Create your own task** following the format
3. **Customize agents** for your specific needs
4. **Read the full README.md** for advanced features

---

**Ready to start?** Load `workflow-coordinator.md` in Cline and watch the magic happen! 🚀
