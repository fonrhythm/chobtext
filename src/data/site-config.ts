import avatar from '../assets/images/chobjaii-profile.jpg';
import hero from '../assets/images/guideme.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://https://chobtext.pages.dev',
    avatar: {
        src: avatar,
        alt: 'ChobJaii'
    },
    title: 'SomenStjerne',
    subtitle: '对一切保持好奇心和探索欲 分享泰国文化 在我眼里看到的泰国娱乐圈变化',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/chobjaii-profile.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '翻译',
            href: '/translate'
        },
        {
            text: '博文',
            href: '/blog'
        },
        {
            text: '标签',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: '关于',
            href: '/about'
        },
        {
            text: '联系',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: '小红书',
            href: 'https://xhslink.com/m/1JIYxGNlQx'
        },
        {
            text: 'Bilibili',
            href: 'https://b23.tv/SMPcUYv'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/somenstjerne?igsh=MTgwbHZ3MjlpM2Nibw%3D%3D&utm_source=qr'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "我是**ChobJaii**，也是**SomenStjerne**。 \n我有很多“花名”，但无论通过哪个名字认识，都很开心你能来到我的个人空间。 目前我正处于持续进化和学习的状态，现在我主要在关注泰国泛娱乐内容， 从泰剧、泰乐到泰语及历史文化，我都在持续探索中。除了这个网页之外，欢迎去 [小红书](https://xhslink.com/m/1JIYxGNlQx) 也可以通过 [INSTAGRAM](https://www.instagram.com/somenstjerne?igsh=MTgwbHZ3MjlpM2Nibw%3D%3D&utm_source=qr).来观看我喜欢的乐队现场视频。",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: '与我联系',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
