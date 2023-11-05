<script setup lang="ts">
import markdownIt from 'markdown-it'
import { withBase, useData } from 'vitepress'

import logoAX from '/assets/images/ax-semantics-square.svg'
import logoVenueless from '/assets/images/venueless-black.svg'
import logoOnventis from '/assets/images/onventis-square.svg'
import logoCreatale from '/assets/images/creatale-square.svg'
import logoUniStuttgart from '/assets/images/uni-stuttgart-square.svg'

const markdown = markdownIt({
	html: true,
	linkify: true,
	typographer: true
})

function transformJourney (e) {
	if (e.story) {
		e.story = markdown.renderInline(e.story)
	}
	return e
}

const experience = [{
	role: 'Head of Product',
	company: 'AX Semantics GmbH',
	logo: logoAX,
	period: 'Aug 2016 – Now',
	story: 'I started at AX as a **UX Designer** and **Frontend Engineer** with a mission to improve the learning curve and the first five minutes a new user has with the product. Over the years I completely redesigned the product to be more intuitive and added many rich and powerful features as **Product Designer** and **Principal Engineer**, while also guiding my colleagues through ever-evolving agile processes. \nI am now spearheading product vision by fusing business requirements and customer needs while pushing technical boundaries as **Head of Product** to make content creation at scale a breeze for our customers, utilizing cutting-edge technology.'
}, {
	role: 'Freelance Design & Frontend',
	company: 'rash.codes & venueless',
	logo: logoVenueless,
	period: 'April 2021 – Now',
	story: 'During the pandemic a few friends and I saw the need for a **virtual conference platform** for our community and existing customers. We built venueless as an **open source project and successful SaaS offering** and are continously improving it and adding features.'
}, {
// 	role: 'Co-Founder & Board Member',
// 	company: 'datenobservatorium e.V.',
// 	logo: 'datenobservatorium.svg',
// 	period: '2019 – 2020'
// }, {
	role: 'Web Application Engineer',
	company: 'Onventis GmbH',
	logo: logoOnventis,
	period: 'Feb 2016 – Jul 2016',
	story: 'For Onventis\' procurement platform **I implemented and shipped a redesign of their catalog management component** together with another new hire. Unresponsive leadership and a rigid scrum process made me quit at the end of my trial period.'
}, {
	role: 'Co-Founder',
	company: 'creatale GmbH',
	logo: logoCreatale,
	period: 'Jan 2013 – Jan 2016',
	story: 'With three friends from university I founded creatale as a **software agency**, working for clients mainly in the medical field, **creating custom applications** for them and building our own game prototypes.'
}, {
	role: 'And much more',
	period: 'since 2004',
	story: `Starting with freelance web design, I've been working with a wide variety of companies, technologies and problems, from CMS like Drupal, browser-based point-of-sale systems, and desktop applications with Java or .NET. **I care a lot about strong communities and diversity, doing a lot of mentoring and creating safe spaces.**`
}].map(transformJourney)

const education = [{
	role: 'Softwaretechnik',
	company: 'Universität Stuttgart',
	logo: logoUniStuttgart,
	period: '2007 – 2013',
	story: 'I favored practical application over theory during my studies of software engineering, learning a great deal about software engineering and processes in our projects with other departments and institutes. I sucessfully dropped out a bit before writing my thesis to start my own company.'
}].map(transformJourney)


</script>
<template lang="pug">
.page-cv
	.page-inner
		nav.no-print
			a(href="/") Back to rash.codes
			a(href="/cv.pdf") Download PDF
		header
			img.portrait(src="~/../../../assets/images/portrait.jpg", alt="portrait of me!")
			h1.name Sebastian
				span  "rash" 
				| Gepperth
			//- h2 designing and coding on the web
			p.description #[b Product designer], #[b frontend engineer], #[b software architect] and #[b team lead] drawing on two decades of experience with – and always being on the cutting edge of – web technologies. I feel right at home in the unknown and at the edge of the possible to get customers and users to where they need to be. Also, huge nerd.
			//- p always being on the cutting edge of web technology, drawing on two decades of experience with a wide range of …building websites and custom software, dance, balance, in service to humans, create, craft, visual person, emergent, manifesting, holding myself to high standards, logo design

		.main-wrapper
			aside
				ul
					li: a(href="https://rash.codes")
						icon(icon="fa-solid fa-link", size="lg", fixed-width)
						| rash.codes
					li: a(href="https://github.com/rashfael")
						icon(icon="fa-brands fa-github", size="lg", fixed-width)
						| github.com/rashfael
					li: a(href="https://linkedin.com/in/rash-codes")
						icon(icon="fa-brands fa-linkedin", size="lg", fixed-width)
						| linkedin.com/in/rash-codes
					li: a(href="mailto:rash@rash.codes")
						icon(icon="fa-solid fa-envelope", size="lg", fixed-width)
						| rash@rash.codes
					li: span
						div: icon(icon="fa-solid fa-location-dot", size="lg", fixed-width)
						| Berlin, Germany
				section
					h2 Languages
					ul
						li German
							i – native
						li English
							i – fluent
				section
					h2 Skills
					ul.skills
						li Naming Things
						li Iterating
						li Asking Questions
						li Listening
						li Empathizing
						li Prioritizing
						li Communicating Transparently
						li Making Mistakes
						li Creativity
						li Leading from the Front
						li Improving Processes
						li Making Decisions
						li Rapid Prototyping
						li Taking Ownership

					h2 Actively Practiced Mastery
					ul.skills
						li JS/TS
						li CSS/Sass
						li HTML/Pug
						li SVG
						li Vue
						li Vite
						li WebSockets
						li OT & CRDTs
					small If you want a full-ish list of everything I'm currently using or have ever used, head over to #[a(href="https://rash.codes/all") rash.codes/all].
			main
				section.experience
					header
						hr
						h2 Experience
						hr
					ul
						li(v-for="job in experience", :key="job.company + job.role")
							img.company-logo(v-if="job.logo", :src="job.logo", :alt="job.company")
							//- .no-img(v-else)
							.content
								header
									.h-container
										h3 {{ job.role }}
										h4(v-if="job.company") {{ job.company }}
									p {{ job.period }}
								p(v-html="job.story")
				section.education
					header
						hr
						h2 Education
						hr
					ul
						li(v-for="job in education", :key="job.company + job.role")
							img.company-logo(:src="job.logo", :alt="job.company")
							.content
								header
									.h-container
										h3 {{ job.role }}
										h4 {{ job.company }}
									p {{ job.period }}
								p(v-html="job.story")
		.buffer
		footer
			p Head over to #[a(href="https://rash.codes") rash.codes] for less serious content, socials, (open source) projects and more!
				br
				span.print-warning For an always up to date version of this CV, visit #[a(href="https://rash.codes/cv") rash.codes/cv].
</template>
<style lang="sass">
@mixin stripes ($color)
	@media screen
		background-image: repeating-linear-gradient(135deg, $color 0, $color 1em, transparent 1em, transparent 2em), linear-gradient(-45deg, $color 0, $color 1em, transparent 1em)
	@media print
		// print rasterizes stripes with a horribly low resolution, so drop them
		background-image: none
		background-color: $color
		// -webkit-print-color-adjust: exact
		// -webkit-filter: opacity(1)
.page-cv
	--clr-primary: #ff5722
	--clr-secondary-text: #333
	--clr-primary-text: black
	--font-display: "Share Tech Mono"
	display: flex
	flex-direction: column
	align-items: center
	color: var(--clr-primary-text)
	min-height: 100vh
	a
		color: var(--clr-primary-text)
	li
		list-style-type: none
	p
		margin: .3em 0
		line-height: 1.33em
		text-align: justify
	.page-inner
		display: flex
		flex-direction: column
		flex: auto
		width: 100%
		max-width: 960px
		> nav
			display: flex
			justify-content: space-between
			margin: 8px 0 16px 0
		> header
			display: grid
			min-height: 10em
			grid-template: 2.5em auto / 10em auto
			gap: 16px
			h1.name
				grid-area: 1 / 2 / 1 / 2
				margin: .5em 0 0 0
				font-weight: 400
				font-family: var(--font-display)
				span
					color: #dd2c00
			.description
				grid-area: 2 / 2 / 2 / 2
			img.portrait
				grid-area: 1 / 1 / 1 / span 2
				border-radius: 50%
				width: 10em
				height: 10em

	.main-wrapper
		display: flex
		flex-direction: row-reverse
		gap: 1.3em
		flex: auto
		main
			flex: auto
			display: flex
			flex-direction: column
		aside
			width: 20em
			flex: none
			margin: 1.85em 0 0 0
			// padding: .5em
			border: 2px solid var(--clr-primary)
			border-top: none
			border-bottom: none
			align-self: flex-start
			position: relative
			background-color: white
			// &::before
			// 	content: ''
			// 	@include stripes(var(--clr-primary))
			// 	position: absolute
			// 	--border-size: -.3em
			// 	top: var(--border-size)
			// 	left: var(--border-size)
			// 	right: var(--border-size)
			// 	bottom: var(--border-size)
			// 	z-index: -1

			margin: 1.55em 0 0 0
			&::before, &::after
				content: ''
				@include stripes(var(--clr-primary))
				height: 1em
				display: block
				
			&::before
				margin-bottom: .5em
			&::after
				margin-top: .5em

			> *
				margin: 0 .5em
			h2
				margin: 1em 0 .2em 0
				font-size: 1.2em
				font-family: var(--font-display)
			h3
				margin: 0
				font-size: 1em
			ul
				padding: 0
			> ul li
				margin: .4em 0
				svg path
					fill: var(--clr-primary)
			li a, li > span
				font-family: var(--font-display)
				line-height: 1.5em
				display: flex
				align-items: center
				gap: 0.4em
				color: var(--clr-primary-text)
				text-decoration: none
			li a:hover
					text-decoration: underline
			section ul
				margin: 0
				padding: 0 0 0 1em
				&.skills
					display: flex
					flex-wrap: wrap
					gap: .5em
					padding: 0 .5em
					li
						// border: 1px solid var(--clr-primary)
						border-radius: 5px
						background-color: var(--clr-primary)
						color: white
						padding: .2em .5em
						font-family: var(--font-display)
						font-weight: 600
						font-size: 1.1em
			small
				display: block
				font-size: .8em
				color: var(--clr-secondary-text)
				margin-top: 1em
				text-align: center
	
	section.experience, section.education
		h2
			margin: 0
		header
			display: flex
			align-items: baseline
			font-family: var(--font-display)
			margin: 1em 0
			h2
				font-size: 1.8em
			hr
				flex: auto
				height: 1em
				margin: 0
				border: none
				@include stripes(var(--clr-primary))
				&:first-child
					width: 4em
					flex: none
					margin-right: 0.85em
				&:last-child
					margin-left: 1em
			p
				margin: 0
				color: var(--clr-secondary-text)
		ul
			padding: 0
			margin: 0
		li
			display: flex
			gap: 1em
			margin: 0 0 .5em 0
			&:last-child
				margin: 0
		.content
			flex: auto
			> header
				justify-content: space-between
				margin-top: 0.2em
				margin-bottom: 0.5em
		h3
			margin: 0
		h4
			margin: 0
			font-weight: 400
		img.company-logo
			width: 4em
			object-position: top
			object-fit: contain
		.no-img
			width: 4em
	.buffer
		flex: auto
	footer
		margin-top: 3em
		display: flex
		justify-content: center
		font-family: var(--font-display)
		font-size: 1.2em
		p
			text-align: center
		.print-warning
			display: none
	@media print
		font-size: 12px
		.no-print
			display: none !important
		footer
			margin-top: 0
			.print-warning
				display: initial
	@media screen and (max-width: 720px)
		.page-inner 
			> nav, > header, aside
				margin-left: .7em
				margin-right: .7em
			> header
				grid-template: 8em auto / 8em auto
				img.portrait
					grid-area: 1 / 1 / 1 / 1
					width: 8em
					height: 8em
				h1.name
					grid-area: 1 / 2 / 1 / 2
				.description
					grid-area: 2 / 1 / 2 / span 2
		.main-wrapper
			flex-direction: column
			aside
				width: auto
			main > section > ul
				margin-left: .3em
				margin-right: 1em
			.experience ul li:last-child
				margin-left: 1em
			section .content header
				flex-direction: column

		footer p
			font-size: .7em
			margin: 1em .2em
</style>
