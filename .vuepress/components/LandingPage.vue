<template lang="pug">
.landing-page
	img.me(src="~@assets/images/lego-me-ava.jpg", alt="a lego version of me!")
	h1 I code!

	.projects
		a(href="https://buntpapier.rash.codes").project.buntpapier
			.icon
			h2 buntpapier
			p mixin-based vue component library
		a(href="https://daumenkino.rash.codes").project.daumenkino
			.icon
			h2 daumenkino
			p vuepress-based presentation framework
		a(href="https://datenobservatorium.de").project.datenobservatorium
			img.icon(src="~@assets/images/datenobservatorium.svg")
			h2 datenobservatorium
			p building a new hackerspace for Stuttgart
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
	img.me
		height: 40vh
		border-radius: 50%
	h1
		font-size: 3em

	.projects
		display: flex
		justify-content: center
		max-width: 1200px
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
			height: 18vh
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
		border-radius: 50%
	.daumenkino .icon
		background-image: unquote(stripe($clr-red-a700 $clr-orange, -45deg, 11vh))
		background-size: 100% 102%
		background-repeat: no-repeat
		border-radius: 50%


</style>
