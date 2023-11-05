# Typescript? oh no.

I do not like TypeScript.
I do not want to use TypeScript.
People who sell TypeScript as the natural progression of the webdev ecosystem annoy me.

Why, you didn't ask? Let me tell you!

## A Quick Disclaimer
What you are about to read is my opinion and not fact.
If you like working with TypeScript and it makes you more productive, that's great!
It doesn't, for me. So please imagine an "I think that X" before each statement in this post.

I have not seriously™ worked with TypeScript (aka on a big project, every day, for at least a year), but I used enough programming languages for long enough and watched other people use TypeScript to have a pretty good idea that I don't want to invest a thousand or more hours finding out.

## Typescript breaks my flow

## Type Systems At Large

I do not like strong typing.

I programmed in Java for years.
I then programmed in C# for years.
Then I started using JavaScript (actually CoffeeScript) and I finally found a language that fit me and how my brain works.

## TypeScript's Typing

```tsx
function derp (a: string | number) {
  return (a as string).toUpperCase()
}

derp(3)
```
[Playground Link](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAEwKYCcAOiAUBDALkQGcp0YwBzRAH0TBAFsAjDASkQG8AoRRdVFBDok+RHmIkyFSmwB0UOAFVMmDAGEJqHG24BfbtzRYcAZjZA)

Does this compile without errors? Of course it does, or I wouldn't bring it up.
But does it run? No.

So, right away, I can't really rely on the codebase compiling being of any use whatsoever.

https://www.typescriptlang.org/play?#code/C4TwDgpgBAIhBOYoF4oG8BQVtQIYC4oA7AVwFsAjBDAXwwGMB7IgZ2CnglwBNmAbEIQBKXXkQEAeOIgB8KdASgBmOhk49+IAHS55AVgwNmbKADkA8gBUA+kICiAQRjnTAGQCa1h6fcBZc-ZeABIOIWEOhNJIqOpiAoYWNvZOLh5ePv6BodnhOvpAA


### Erasure, Always

Java's generics type erasure was bad enough, but TypeScript just throws out **all type information**.
There is no reflection, arguably the most fun part of every strongly typed language.
Yes, there are 3rd party libraries, but a core design philosophy of typescript is total type erasure.

### Not typed enough

TypeScript is one of those languages which sort of have a half baked type system.

If I make the effort to define types, I don't want to stop at "Oh, dunno, takes a number".
Give me Ada-levels of control. Give me "Whole numbers from 5 to 92". Give me "Strings shorter than 24 characters, but only uppercase".

## "It's just JavaScript"

I'm not nitpicking what exactly makes something "just JavaScript", because I don't want "just JavaScript" from a transpiled language.
JavaScript itself is an okay language and runtime, but we all know it has some… problem areas, weirdly named APIs and other decades old crust. If I were to accept the extra mental load from using a transpiled language, I actually **want** it to do more than "just be JavaScript", I want it to fix some of that stale smelling stuff and add enhancements.
Stuff like CoffeeScript did with the operational chaining operator, before TC39 got their act together (I am incredibly happy by all the new language features introduced by TC39 btw).
Give me operator overloading, give me STUFF!


## Writing code in teams

I believe in small teams.

I get why companies might *need* TypeScript if they throw fifty different devs per months against a codebase and have tools scream at hapless juniors stabbing blindly at a humongous codebase, whipped by an army of product managers.

That's not how I work.
I'd rather work with people who honed their craft and their tools and work well together.
Of course seasoned developers don't just walk out of the woods with all their knowledge fully formed. Blabla Junior devs.


## "TypeScript helps with refactoring"

I… guess? I never had a problem throwing regexes into a find+replace, though. And most of the time, my refactors are not limited to some simple renames, but actually move around code and redraw abstractions, which just aren't happening automatically.

## A glorified linter

The lack of runtime anything makes me feel like TypeScript is "just" and overhyped linter. Linters are fine, but, well.


## Damage To The Ecosystem

Here comes the part that really annoys me and makes me sound most like an old and grumpy man.
Everything nowadays uses TypeScript… and it shows. It's why I left Java and C# behind.
You can write exceptional libraries in any language, but somehow languages like the ones above make it far easier to phone it in.

### "Documentation"

JavaDoc "documentation" is the classic goto joke with endless pages of:

```
setFoo(foo) : sets the foo
```

And Microsoft (the ones also… owning TypeScript) libraries are masters of that style of "documentation", which is only half a step away from "I'll just read the damn sourcecode".
Bask in the glory of heaps of unexplained interfaces of [monaco](https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html). Contain your exitement over ["For a complete reference of the current available options, refer to config.ts."](https://github.com/vuejs/vitepress/blob/master/src/node/config.ts).

## "But my neat typing"

I don't know about you, but putting "clean interfaces" above convenience or sensible behaviour aint my jam.
So stuff like [this](https://github.com/vuejs/vue-router-next/issues/855) is **very** frustrating. (Yes, this just dead-pan writes `undefined` into the url, which is of course absolutely what you want. All in favour of "the types say so")

## IntelliSense-Driven-Development

I'm not a fan of pressing `.` and scrolling through the list of autocompletes. I'd rather read docs and code.

## The Microsoft situation

TypeScript is created and owned by Microsoft. And I am sceptical. Very, very, sceptical.

## What's it actually good for

I don't need saving from the occasional "undefined" (which it actually does not guarantee)

## It makes certain things harder

request example

Typescript limits or at least guides woyush

##  More links!

https://github.com/microsoft/TypeScript/issues/43662

https://twitter.com/geoffreyhuntley/status/1455936480023482377?s=21

https://github.com/microsoft/vscode/issues/64566

https://wiki.archlinux.org/title/Visual_Studio_Code#Extension_support

https://github.com/microsoft/TypeScript/issues/32319

https://www.onux.com/jspp/tutorials/type-system#Appendix-B
