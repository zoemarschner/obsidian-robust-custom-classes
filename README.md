# Robust Custom Classes
This is a simplified reimplementation of the [Obsidian](https://obsidian.md) plugin [Custom Classes](https://github.com/LilaRest/obsidian-custom-classes/blob/main/src/main.ts), designed for the simplified use case I use custom classes for. For this use case, my implementation should be faster and will not have the bugs the original plugin runs into when used with other plugins that change the markdown rendering. 

Add a code block `class: example` to add the listed class (e.g. "example" here) to the container that the code block is immediatly included in.

## Differences
Note this functions differently from the original plugin in certain cases:

<table align="center">
<thead>
<td align="center">Markdown</td>
<td align="center">Mine</td>
<td align="center">Custom Classes</td>
</thead>
<tbody>
<td><p>
	
```markdown
`class: example`
hi
hello
**hi!!**
```

</p></td>
<td><p>
	
```html
<p class="example">
	"hi" <br>
	"hello" <br>
	<strong>hi!!</strong>           
</p>
```

</p></td>
<td><p>
	
```html
<div class="example">
	<p>
		"hi" <br>
		"hello" <br>
		<strong>hi!!</strong>           
	</p>
</div>
```

</p></td>
</tbody>
</table>

Currently, my implementation never creates or removes divs, it only adds classes and sets elements to be hidden. This makes the implementation much simpler/faster, although it is unable to add classes to certain entire objects, like tables, lists, and callouts (which I do not need for my vault). It _is_ able to add classes to entire paragraphs and headers.

This implementation doesn't work with live preview.

## Installation

Clone the repository into the folder `<your-vault>/.obsdian/plugins/`. Remember to enable the plugin in the settings page.

The plugin includes an example of a custom class that can be used to test the installation, `-cc-blue`. Try viewing this markdown in reading mode:
```
The word **`class: -cc-blue`test** is highlighted in blue.
```
