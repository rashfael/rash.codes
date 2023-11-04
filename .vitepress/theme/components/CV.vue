<script setup lang="ts">
import markdownIt from 'markdown-it'

const markdown = markdownIt({
	html: true,
	linkify: true,
	typographer: true
})

function transformJourney (e) {
	if (e.logo) e.logo = new URL(`../../../assets/images/${e.logo}`, import.meta.url).href
	// transform story from markdown
	if (e.story) {
		e.story = markdown.render(e.story)
	}
	return e
}

const skills = ['js']
const experience = [{
	role: 'Head of Product',
	company: 'AX Semantics GmbH',
	logo: 'ax-semantics-square.svg',
	period: 'Aug 2016 – Now',
	story: 'I started at AX as a **Designer** and **Frontend Engineer** with a mission to improve the learning curve and the first five minutes a new user has with the product. Over the years I completely redesigned the product to be more intuitive and guided my colleagues through ever-evolving agile processes as **Product Designer** and **Principal Engineer**. I am now spearheading product vision by FUSING? business requirements, customer needs and pushing technical boundaries as **Head of Product**.'
}, {
	role: 'Freelance Design & Frontend',
	company: 'rash.codes & venueless',
	logo: 'venueless-black.svg',
	period: 'April 2021 – Now',
	story: 'At the start of the pandemic a few friends and I saw the need for a virtual conference platform for our community and existing customers. We built venueless as an open source project and successful SaaS offering and are continously improving it and adding features.'
}, {
// 	role: 'Co-Founder & Board Member',
// 	company: 'datenobservatorium e.V.',
// 	logo: 'datenobservatorium.svg',
// 	period: '2019 – 2020'
// }, {
	role: 'Web Application Engineer',
	company: 'Onventis GmbH',
	logo: 'onventis-square.svg',
	period: 'Feb 2016 – Jul 2016',
	story: 'For onventis\' procurement platform I implemented and shipped a redesign of their catalog management component together with another new hire. Unresponsive leadership and a rigid scrum process made me quit at the end of my trial period.'
}, {
	role: 'Co-Founder',
	company: 'creatale GmbH',
	logo: 'creatale-square.svg',
	period: 'Jan 2013 – Jan 2016',
	story: 'With three friends from university I founded creatale as a software agency, working for clients mainly in the medical field, creating custom applications for them and building our own game prototypes.'
}, {
	role: 'And much more',
	period: 'since 2004',
	story: `Starting with freelance web design, I've been working with a wide variety of companies, technologies and problems, from CMS like Drupal, browser-based point-of-sale systems, and building desktop applications with Java or .NET. I care a lot about strong communities and diversity, doing a lot of mentoring and creating safe spaces.`
}].map(transformJourney)

const education = [{
	role: 'Softwaretechnik',
	company: 'Universität Stuttgart',
	logo: 'uni-stuttgart-square.svg',
	period: '2007 – 2013',
	story: 'I favored practical application over theory during my studies of software engineering, learning a great deal about software engineering and processes in our projects with other departments and institutes. I sucessfully dropped out a bit before writing my thesis to start my own company.'
}].map(transformJourney)


function print () {
	window.open(location.href).print()
}

</script>
<template lang="pug">
.page-cv
	.page-inner
		nav.no-print
			a(href="/") Back to rash.codes
			a(href="", @click.prevent="print") Download PDF
		header
			img.portrait(src="~/../../../assets/images/portrait.jpg", alt="portrait of me!")
			div
				h1 Sebastian
					span  "rash" 
					| Gepperth
				//- h2 designing and coding on the web
				p always being on the cutting edge of web technology, drawing on decades of experience with a wide range of …building websites and custom software, dance, balance, in service to humans, create, craft, visual person

		.main-wrapper
			main
				section.experience
					header
						hr
						h2 Experience
						hr
					ul
						li(v-for="job in experience", :key="job.company + job.role")
							img.company-logo(v-if="job.logo", :src="job.logo", :alt="job.company")
							.no-img(v-else)
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
				section
					p head over to #[a(href="rash.codes") rash.codes] for socials, (open source) projects and more
			aside
				ul
					li: span
						icon(icon="fa-solid fa-location-dot", size="lg", fixed-width)
						| Berlin, Germany
					li: a(href="https://rash.codes")
						icon(icon="fa-solid fa-link", size="lg", fixed-width)
						| rash.codes
					li: a(href="mailto:rash@rash.codes")
						icon(icon="fa-solid fa-envelope", size="lg", fixed-width)
						| rash@rash.codes
					li: a(href="https://linkedin.com/in/rash-codes")
						icon(icon="fa-brands fa-linkedin", size="lg", fixed-width)
						| linkedin.com/in/rash-codes
					li: a(href="https://github.com/rashfael")
						icon(icon="fa-brands fa-github", size="lg", fixed-width)
						| github.com/rashfael
				section
					h2 Languages
					ul
						li German
							i – native
						li English
							i – fluent
				section
					h2 Skills
					ul
						li Naming Things
						li Asking Questions
						li Empathizing
						li Communicating Transparently
						li prioritizing
						li leading from the front
						li Improving Processes
						li making decisions
						li Rapid Prototyping

					h2 Actively Practiced Mastery
					ul.skills
						li JS/TS
						li CSS/Sass
						li HTML/Pug
						li Vue
						li Vite
						li WebSockets
						li OT & CRDTs
</template>
<style lang="sass">
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
		margin: .4em 0
		line-height: 1.33em
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
			display: flex
			gap: 16px
			h1
				font-weight: 300
				font-family: var(--font-display)
				span
					color: #dd2c00
			h2
				font-weight: 500
				color: var(--clr-secondary-text)
			img.portrait
				border-radius: 50%
				width: 160px
				height: 160px

	.main-wrapper
		display: flex
		gap: 1em
		flex: auto
		main
			flex: auto
			display: flex
			flex-direction: column
		aside
			width: 20em
			flex: none
			margin: 1.5em 0 0 0
			padding: .5em
			border: 2px solid var(--clr-primary)
			align-self: flex-start
			h2
				margin: 1em 0 .2em 0
				font-size: 1.2em
				font-family: var(--font-display)
			h3
				margin: 0
				font-size: 1em
			ul
				margin: 0
				padding: 0
			section ul
				padding: 0 0 0 1em
				&.skills
					display: flex
					flex-wrap: wrap
					gap: .5em
					padding: 0 .5em
			> ul li
				margin: .4em 0
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
	
	section.experience, section.education
		h2
			margin: 0
		header
			display: flex
			align-items: baseline
			font-family: var(--font-display)
			margin-top: 1em
			h2
				font-size: 1.8em
			hr
				flex: auto
				height: 1em
				margin: 0
				border: none
				background-color: var(--clr-primary)
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
		li
			display: flex
			gap: 1em
			margin: 0 0 .5em 0
		.content
			flex: auto
			> header
				justify-content: space-between
				margin-top: 0.2em
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
	@media print
		font-size: 12px
		// padding: 1cm
		.no-print
			display: none !important
		a, a:link, a:visited
			border: none
			color: black
			text-decoration: none
</style>
