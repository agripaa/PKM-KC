"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
  } from "@nextui-org/navbar";
  import { siteConfig } from "@/config/site";
  import ParqrLogo from "@/assets/LOGO PARQR.png";
  import NextLink from "next/link";
  import { usePathname } from "next/navigation";
  import { Logo } from "@/components/icons";
  
  
export const Navbar = () => {
	const nameParams = usePathname();
	const isActive = (href: string) => href === nameParams;
  
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
			  <NavbarItem key={item.href} className="text-blue-500">
				<NextLink
				  href={item.href}
				  className={`p-2`}
				>
				  <p className={`p-2 px-4 ${isActive(item.href) ? 'bg-blue-100 w-full bg-opacity-50 rounded-lg' : ''}`}>{item.label}</p>
				</NextLink>
			  </NavbarItem>
			))}
		  </ul>
		</NavbarContent>
	  </NextUINavbar>
	);
  };
  