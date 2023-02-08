import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dataminer - dig into data with a nicer UI</title>
        <meta name="description" content="Dataminer app homepage - dig into data with a nicer UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
            <h3 className={inter.className}>
              Open source project by<code className={styles.code}><u><a href="https://github.com/ivanol55/dataminer" target="_blank" rel="noopener noreferrer">Iván</a></u></code>
            </h3>
          <a className={styles.card} href="https://github.com/ivanol55/dataminer" target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              <u>source code</u> <span>-&gt;</span>
            </h2>
          </a>
        </div>

        <div className={styles.center}>
          <div className={styles.formcontainer}>
              <form className={styles.form} action="/send-data-here" method="post">
                <h2 className={inter.className}>company to investigate</h2>
                <input type="text" id="company" name="company" placeholder="Cognito Inc."></input><br/>
                <button className={styles.submit} type="submit">
                  <h3 className={inter.className}>
                    research company <span className={styles.arrowSpan}>-&gt;</span>
                  </h3>
                </button>
              </form>
          </div>
        </div>

        <div className={styles.grid}>
        <a
            href="https://github.com/ivanol55/dataminer"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Documentation <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get to the project&apos;s documentation so you can better understand how it works and use it to its full potential
            </p>
          </a>

          <a
            href="https://github.com/ivanol55/dataminer"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get to the main project&apos;s GitHub page so you can see the source code and contribute
            </p>
          </a>

          <a
            href="https://github.com/ivanol55"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Iván&apos;s GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find my other available security and privacy open source projects.
            </p>
          </a>

          <a
            href="https://github.com/ivanol55/atomic-threat-hunter"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Featured project <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Add depth to your discoveries with Atomic Threat Hunter, an automated vulnerability scanner built around alert data management.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
