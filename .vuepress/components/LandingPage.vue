<template lang="pug">
.landing-page
	img.me(src="~@assets/images/lego-me-ava.jpg", alt="a lego version of me!")
	h1 Hi I am rash
		br
		| and I code and design!

	h2 Open Source Projects

	.projects
		a.project.buntpapier(href="https://buntpapier.rash.codes", title="buntpapier")
			.icon
			h2 buntpapier
			p mixin-based vue component library
		a.project.daumenkino(href="https://daumenkino.rash.codes", title="daumenkino")
			.icon
			h2 daumenkino
			p vuepress-based presentation framework
		a.project.venueless(href="https://venueless.org/", title="venueless")
			img.icon(src="~@assets/images/venueless.svg")
			h2 venueless
			p online conference platform
		a.project(href="https://github.com/rashfael", title="github")
			img.icon(src="~@assets/images/octocat.svg", alt="github")
			h2 Github
			p for even more open source projects

	h2 My #[span.large skills] and tools of choice include

	.skills
		span HTML
		span CSS
		span JavaScript
		span Vue.js
		span Pug
		span Stylus
		span Node.js
		span SVG
		span Affinity Designer
		span Python
		span Django
		span PostgreSQL
		span git
		span webpack
		span vite
		span e2e testing
		span mocha
		span tuiv
		span playwright
		span nginx
		span docker

	h2 I build upon years of experience with

	.skills
		span Java
		span C#/.NET
		span C/C++
		span Assembler
		span PHP
		span Ruby
		span CoffeeScript
		span Bootstrap
		span Backbone
		span Chaplin
		span jQuery
		span underscore
		span D3
		span docpad
		span grunt
		span gulp
		span bower
		span brunch
		span MongoDb
		span MySql
		span Haskell
		span Ada
		span svn
		span gtk
		span OpenGL
		span Scrum
		span LaTeX
		span SOAP
		span HATEOAS
		span USB
		span apache
		span msgpack
		span Qt
		span WinForms
		span … and much more

	h2.hire-me You can hire me!

	h2 Contact me at
	.links
		a(href="https://github.com/rashfael", title="github").link
			img.icon(src="~@assets/images/octocat.svg", alt="github")
		a(href="https://chaos.social/@rash", title="fediverse").link
			img.icon(src="~@assets/images/mastodon.svg", alt="chaos.social")
		a(href="https://twitter.com/rashfael", title="twitter").link
			img.icon(src="~@assets/images/twitter.svg", alt="twitter")

	.about #[a(href="mailto:rash@rash.codes") rash@rash.codes] · Sebastian Gepperth · Mühlenbecker Weg 1 · 16515 Oranienburg
</template>
<script>
import "@fontsource/share-tech-mono"

export default {
	components: {},
	data () {
		return {
		}
	},
	computed: {},
	created () {},
	mounted () {
		this.$nextTick(() => {
		})
	},
	methods: {}
}
</script>
<style lang="stylus">
stripe(colors, angle, width)
	$grad = 'repeating-linear-gradient(' + angle
	for $clr, $i in colors
		$grad += ',' + $clr + ' ' + $i*width + ',' + $clr + ' ' + ($i + 1)*width
	$grad += ')'
	return $grad
$gradclrs = $clr-red $clr-pink $clr-purple $clr-deep-purple $clr-indigo $clr-blue $clr-light-blue $clr-cyan $clr-teal $clr-green $clr-light-green $clr-lime $clr-yellow $clr-amber $clr-orange $clr-deep-orange

html, body
	margin: 0
.landing-page
	background-color: #27343a
	color: $clr-primary-text-dark
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	font-family: "Share Tech Mono"
	font-size: 1.5rem
	min-height: 100vh
	padding: 2em 0
	img.me
		height: 20vh
		border-radius: 50%
	h1
		font-size: 3em
		text-align: center
	h2
		text-align: center

	.projects, .links
		display: flex
		justify-content: center
		max-width: 1200px
		flex-wrap: wrap
	.project, .link
		display: flex
		flex-direction: column
		text-align: center
		align-items: center
		color: $clr-primary-text-dark
		text-decoration: none
		margin: 1em
		flex: 1
		&:visited
			$clr-primary-text-dark
		.icon
			height: 15vh
			width: @height
		h2, p
			margin: 0
		h2
			margin-top: 1em
			text-decoration: underline
	.buntpapier .icon
		background-image: unquote(stripe($gradclrs, 90deg, 1vh))
		background-size: 100% 102%
		background-repeat: no-repeat
		clip-path: circle()
		position: relative
		&::before
			display: block
			content: ''
			position: absolute
			bottom: 0
			height: 11vh
			width: 100%
			opacity 0.2
			background-color: white
	.daumenkino .icon
		background-image: unquote(stripe($clr-red-a700 $clr-orange, -45deg, 9.4vh))
		background-size: 100% 102%
		background-repeat: no-repeat
		border-radius: 50%

	.link
		margin: 1em 3em
		.icon
			height: 10vh
			width: @height
	.about
		margin-top: 64px
	a
		color: $clr-pink

	.skills
		max-width: 640px
		line-height: 36px
		margin: 0 1em
		text-align: center
		span
			display: inline-block
			&:not(:last-child)::after
				content: '/'
				font-weight: bold
				color: $clr-blue-grey-400
				margin: 0 4px
	.hire-me
		font-size: 4em
	@media(max-width: 720px)
		.projects, .links
			flex-direction: column
		.about
			text-align: center
			padding: 0 16px
		.hire-me
			font-size: 2em
</style>
