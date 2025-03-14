
import React from 'react';
import ZyterLogo from './ZyterLogo';
import { Button } from './ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-zyter-purple py-5">
      <div className="zyter-container flex justify-between items-center">
        {/* Logo - updated container for larger logo */}
        <div className="flex-shrink-0">
          <ZyterLogo className="h-14" />
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white hover:bg-zyter-purple/50">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zyter-blue/20 to-zyter-teal/20 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-zyter-blue">
                            Digital Health Solutions
                          </div>
                          <p className="text-sm leading-tight text-zyter-navy">
                            Comprehensive digital health infrastructure solutions for government healthcare organizations.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white hover:bg-zyter-purple/50">Customers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zyter-blue/20 to-zyter-teal/20 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-zyter-blue">
                            Success Stories
                          </div>
                          <p className="text-sm leading-tight text-zyter-navy">
                            See how government healthcare organizations have transformed with Zyter solutions.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white hover:bg-zyter-purple/50">Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zyter-blue/20 to-zyter-teal/20 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-zyter-blue">
                            About Zyter
                          </div>
                          <p className="text-sm leading-tight text-zyter-navy">
                            Learn about our mission to transform healthcare through digital innovation.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-white hover:text-white hover:bg-zyter-purple/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
                  )}
                >
                  Career
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white hover:bg-zyter-purple/50">Learning</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zyter-blue/20 to-zyter-teal/20 p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-zyter-blue">
                            Resources
                          </div>
                          <p className="text-sm leading-tight text-zyter-navy">
                            Access webinars, whitepapers, and case studies on digital health transformation.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Icons & Connect Button */}
          <div className="flex items-center space-x-3">
            <a href="#" className="text-white p-2 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white p-2 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
            <Button className="bg-transparent text-white border-2 border-zyter-light-teal hover:bg-transparent hover:border-white rounded-full px-6">
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
