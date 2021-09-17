<script>
	import { page } from '$app/stores';
	import logo from './logo.png';
	import { language } from '$stores';
	import { get } from 'svelte/store';
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}

	let selectedLanguage;

	let setLanguage = function (value) {
		selectedLanguage = value;
		language.set(value);
	};

	language.subscribe(() => {
		selectedLanguage = get(language);
	});

	const languages = [
		{ value: 'en', label: 'EN', selected: true },
		{ value: 'pl', label: 'PL', selected: false }
	];
</script>

<Navbar color="dark" dark expand="md">
	<NavbarBrand href="/"><img class="logo" src={logo} alt="GCMS-POC" /></NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink active={$page.path === '/'} sveltekit:prefetch href="/">Home</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active={$page.path === '/about-us'} sveltekit:prefetch href="/about-us"
					>About Us</NavLink
				>
			</NavItem>
			<NavItem>
				<NavLink active={$page.path === '/articles'} sveltekit:prefetch href="/articles"
					>Articles</NavLink
				>
			</NavItem>
			<Dropdown nav inNavbar>
				<DropdownToggle nav caret>{$language.toUpperCase()}</DropdownToggle>
				<DropdownMenu end>
					{#each languages as language}
						<DropdownItem on:click={() => setLanguage(language.value)}
							>{language.label}</DropdownItem
						>
					{/each}
				</DropdownMenu>
			</Dropdown>
		</Nav>
	</Collapse>
</Navbar>

<style>
	.logo {
		max-width: 250px;
	}
</style>
