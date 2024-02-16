export interface PageData {
	page: Page;
  }
  
  interface Page {
	title: string;
	description: string;
	sections: Section[];
  }
  
  type Section = HeaderSection | MainSection | FooterSection;
  
  interface HeaderSection {
	type: 'header';
	content: HeaderContent;
  }
  
  interface HeaderContent {
	logo: Logo;
	navigation: NavigationItem[];
  }
  
  interface Logo {
	src: string;
	alt: string;
	link: string;
  }
  
  interface NavigationItem {
	name: string;
	link: string;
  }
  
  interface MainSection {
	type: 'main';
	content: ContentItem[];
  }
  
  type ContentItem = TextContent | ImageContent | VideoContent | LinkContent;
  
  interface TextContent {
	type: 'text';
	id: string;
	text: string;
  }
  
  interface ImageContent {
	type: 'image';
	id: string;
	src: string;
	alt: string;
  }
  
  interface VideoContent {
	type: 'video';
	id: string;
	src: string;
	title: string;
  }
  
  interface LinkContent {
	type: 'link';
	text: string;
	url: string;
  }
  
  interface FooterSection {
	type: 'footer';
	content: FooterContent;
  }
  
  interface FooterContent {
	text: string;
	links: NavigationItem[];
  }
  