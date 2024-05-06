import styles from "./home.module.css";


export const Home = () => {
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles['hero-names']}>
                    <h1 className={styles['hero-name']} >Jesus Enrique Uribe Lopez</h1>
                    <h2 className={styles['hero-subTitle']} >Software Engineer - JavaScript/TypeScript</h2>
                    <h3 className={styles['hero-skills']}>Specializing in React.js, Next.js, Tailwind CSS, and the MERN Stack.</h3>
                </div>
                <div className={styles['hero-social']} >
                    <div className={styles['hero-socia-links']} >
                        <a target="_blank" href="https://www.linkedin.com/in/jesus-enrique-uribe-lopez-486584228/?locale=en_US" >
                            <LinkedinIcon className={styles['hero-socia-icon']} />
                        </a>
                        <button className={styles['hero-socia-button']} >
                            <MailboxIcon className={styles['hero-socia-icon']} />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}



const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)
const MailboxIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
        <polyline points="15,9 18,9 18,11" />
        <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
        <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
)