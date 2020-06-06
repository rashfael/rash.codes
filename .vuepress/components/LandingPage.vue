<template lang="pug">
.landing-page
	img.me(src="~@assets/images/lego-me-ava.jpg", alt="a lego version of me!")
	h1 I code!

	.projects
		a(href="https://buntpapier.rash.codes", title="buntpapier").project.buntpapier
			.icon
			h2 buntpapier
			p mixin-based vue component library
		a(href="https://daumenkino.rash.codes", title="daumenkino").project.daumenkino
			.icon
			h2 daumenkino
			p vuepress-based presentation framework
		a(href="https://datenobservatorium.de", title="datenobservatorium").project.datenobservatorium
			img.icon(src="~@assets/images/datenobservatorium.svg")
			h2 datenobservatorium
			p building a new hackerspace for Stuttgart
		a(href="https://venueless.org/", title="venueless").project.venueless
			img.icon(src="~@assets/images/venueless.svg")
			h2 venueless
			p online conference platform
	.links
		a(href="https://github.com/rashfael", title="github").link
			img.icon(src="~@assets/images/octocat.svg", alt="github")
		a(href="https://chaos.social/@rash", title="fediverse").link
			img.icon(src="~@assets/images/mastodon.svg", alt="chaos.social")
		a(href="https://twitter.com/rashfael", title="twitter").link
			img.icon(src="~@assets/images/twitter.svg", alt="twitter")
	.about #[a(href="mailto:rash@rash.codes") rash@rash.codes] · Sebastian Gepperth · Dammstraße 18 · 70806 Kornwestheim
</template>
<script>
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
	font-family: monospace
	font-size: 1.5rem
	min-height: 100vh
	padding: 2em 0
	img.me
		height: 20vh
		border-radius: 50%
	h1
		font-size: 3em

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

@media(max-width: 720px)
	.projects, .links
		flex-direction: column
	.about
		text-align: center
		padding: 0 16px
</style>
