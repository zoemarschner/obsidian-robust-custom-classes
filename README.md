# Robust Custom Classes
This is a simplified reimplementation of the [Obsidian](https://obsidian.md) plugin [Custom Classes](https://github.com/LilaRest/obsidian-custom-classes/blob/main/src/main.ts), designed for the simplified use case I use custom classes for. For this use case, my implementation should be faster and will not have the bugs the original plugin runs into when used with other plugins that change the markdown rendering. 

Add a code block `class: example` to add the listed class (e.g. "example" here) to the container that the code block is immediatly included in.
