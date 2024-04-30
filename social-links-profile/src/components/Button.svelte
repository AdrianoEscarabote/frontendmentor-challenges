<script>
	export let text = 'Click me';
	export let href = '';
	export let ariaLabel = '';
</script>

<a
	{href}
	aria-label={ariaLabel}
	target="_blank"
	class="grid place-content-center bg-neutral-600 bodyBold text-neutral-000 h-[45px] w-full rounded-lg hover:bg-primary-700 hover:text-neutral-900"
	>{text}</a
>
