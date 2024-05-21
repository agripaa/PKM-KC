import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
  } from "@nextui-org/navbar";
  import { siteConfig } from "@/config/site";
  import ParqrLogo from "@/assets/LOGO PARQR.png";
  import NextLink from "next/link";
  import { Logo } from "@/components/icons";
  
  export const Navbar = () => {
	return (
	  <NextUINavbar maxWidth="xl" position="sticky" className="drop-shadow bg-neutral-50">
		<NavbarContent className="basis-1/3 sm:basis-full" justify="start">
		  <NavbarBrand as="li" className="gap-2 max-w-fit">
			<NextLink className="flex justify-start items-center gap-2" href="/">
			  <Logo 
				src={ParqrLogo} 
				width={22}
				height={32}
			  />
			  <p className="font-bold leading-12 text-2xl ml-[5px]">ParQR</p>
			</NextLink>
		  </NavbarBrand>
		  <ul className="hidden lg:flex gap-2 justify-start ml-5">
			{siteConfig.navItems.map((item) => (
			  <NavbarItem key={item.href}>
				<NextLink
				  className='text-blue-500'
				  color="primary"
				  href={item.href}
				>
				  <p className="mr-4">{item.label}</p>
				</NextLink>
			  </NavbarItem>
			))}
		  </ul>
		</NavbarContent>
	  </NextUINavbar>
	);
  };
  