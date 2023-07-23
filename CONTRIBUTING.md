# How to contribute

We want to keep it as easy as possible to contribute changes that
get things working in your environment. There are a few guidelines that we
need contributors to follow so that we can have a chance of keeping on
top of things.

## Ideas, Design and Code

Since this is a project with growth potential, every idea is welcome no matter how crazy (well there's a limit on what can be achieved of course).

This repository aims to collect everything related to Project Vincent. Please share your thoughts, links, designs, code herein.

## Getting Started

- Make sure you have a [GitHub account](https://github.com/join).
- Submit an issue (can be a fix, typo correction, to do item, question etc.) for your concern if one does not already exist.
  - Clearly describe the issue including steps to reproduce when it is a bug.
- Fork the repository on GitHub.

## Making Changes

- Create a topic branch from where you want to base your work.
  - This is usually the main branch.
  - To quickly create a topic branch based on main, run `git checkout -b
fix/main/my_contribution main`. Please avoid working directly on the
    `main` branch.
- Make commits of logical and atomic units.
- Check for unnecessary whitespace with `git diff --check` before committing.
- Make sure your commit messages are in the proper format. If the commit
  addresses an issue filed, start
  the first line of the commit with the issue number in parentheses.
- For documentation use the Markdown (.md) format.

### Summary

- Changes resulting in test pipeline failures will be reverted if they cannot
  be resolved within one business day.

## Additional Resources

- [General GitHub documentation](https://help.github.com/)
- [GitHub pull request documentation](https://help.github.com/articles/creating-a-pull-request/)
- [Markdown Guide](https://www.markdownguide.org)
- [Den Haag Arduino / Raspberry Pi Community Slack](denhaagarduin-btu2346.slack.com)
