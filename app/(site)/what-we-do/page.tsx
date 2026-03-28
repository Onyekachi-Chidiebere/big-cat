"use client";
import "../site.css";
import styles from "../styles.module.css";
import { WhatWeDoEffects } from "../WhatWeDoEffects";

export default function WhatWeDoPage() {

  return (
    <div>
      <WhatWeDoEffects />
      <div className={styles['cursor']} id="cur"></div>
      <div className={styles['cursor-ring']} id="curR"></div>
      <div className={styles['cursor-pulse']} id="curPulse"></div>
      <div className={styles['cursor-tl']} id="curTL"></div>
      <div className={styles['cursor-tr']} id="curTR"></div>
      <div className={styles['cursor-bl']} id="curBL"></div>
      <div className={styles['cursor-br']} id="curBR"></div>
      <div id="progress-bar"></div>
      <a href="/#contact" className={styles['floating-cta']} id="float-cta">
        Get a Quote
      </a>

      {/* <!-- ANNOUNCE --> */}
      <div className={styles['announce-bar']} id="announce-bar">
        <div className={styles['announce-text']}>📞 Mon–Fri: 9am–6pm &nbsp;|&nbsp; Sat–Sun: 10am–5pm &nbsp;|&nbsp; <strong>+44 (0)7722 143162</strong> &nbsp;<a href="/#contact" style={{ color: "var(--sea-light)", marginLeft: 8 }}>Get a Free Quote →</a></div>
        <button className={styles['announce-close']} id="ann-close" aria-label="Close">✕</button>
      </div>


      {/* <!-- NAVBAR --> */}
      <header className={styles['navbar']} id="navbar">
        <a href="/" className={styles['logo']}>
          <img src="/logo.png" alt="Big Cat Security Ltd" />
        </a>
        <nav id="nav">
          <a href="/">Home</a>
          <a href="/what-we-do">What We Do</a>
          <a href="/#about">About</a>
          <a href="/work-for-us" className={styles['nav-cta']}>Work for Us</a>
        </nav>
        <div className={styles['nav-right']}>
          <a href="tel:+448002440000" className={styles['nav-phone']}>0800 244 228</a>
          <a href="/#contact" className={styles['btn-pill']}>Get a Quote</a>
        </div>
        <button id="menu-toggle" aria-label="Menu">☰</button>
      </header>



      {/* <!-- HERO — SPLIT LAYOUT --> */}
      <section className={styles['wwd-hero']}>
        {/* <!-- LEFT: Editorial dark panel --> */}
        <div className={styles['wwd-hero-left']}>
          <div className={styles['hero-corner-tl']}></div>
          <div className={styles['wwd-hero-label']} id="hero-label">What We Do</div>
          <h1 className={styles['wwd-hero-h1']} id="hero-h1">
            <em>Securing What</em>
            <strong>Matters Most</strong>
          </h1>
          <p className={styles['wwd-hero-p']} id="hero-p">Our mission is to safeguard people, property, and events with professionalism and integrity — delivering trusted SIA security solutions across the UK since 2022.</p>
          <div className={styles['wwd-hero-actions']} id="hero-actions">
            <a href="/#contact" className={styles['btn-pill-fill']}>Request a Quote</a>
            <a href="#wwd-services" className={styles['btn-pill-dark']}>Our Services</a>
          </div>
          <div className={styles['wwd-hero-status']} id="hero-status">
            <div className={styles['wwd-status-dot']}></div>
            <span>SIA Licensed</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span>Est. 2022</span>
            <span style={{ color: "rgba(255,255,255,.1)" }}>·</span>
            <span id="pg-clock">--:--:--</span>
          </div>
        </div>

        {/* <!-- RIGHT: Image panel --> */}
        <div className={styles['wwd-hero-right']}>
          <div className={styles['wwd-hero-img-main']}>
            <img src="data:image/jpeg;base64,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" alt="Security Operations Centre"/>
          </div>
          <div className={styles['wwd-hero-scan']}></div>
          <div className={styles['wwd-hero-reticle']}>
            <div className={styles['wwd-hr-tl']}></div><div className={styles['wwd-hr-tr']}></div>
            <div className={styles['wwd-hr-bl']}></div><div className={styles['wwd-hr-br']}></div>
          </div>
          {/* <!-- Floating stat --> */}
          <div className={styles['wwd-hero-card']} id="hero-card">
            <div className={styles['wwd-hero-card-n']}>50<em>+</em></div>
            <div className={styles['wwd-hero-card-l']}>Events Secured</div>
          </div>
        </div>
      </section>

      {/* <!-- SERVICE INTRO STRIP --> */}
      <div className={styles['svc-intro-strip']}>
        <div className={styles['svc-intro-inner']}>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d1']}`} id="si1">
            <div className={styles['svc-intro-num']}>01</div>
            <div>
              <div className={styles['svc-intro-title']}>Security Guards</div>
              <div className={styles['svc-intro-sub']}>SIA Certified &amp; Licensed</div>
            </div>
          </div>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d2']}`} id="si2">
            <div className={styles['svc-intro-num']}>02</div>
            <div>
              <div className={styles['svc-intro-title']}>Event Security</div>
              <div className={styles['svc-intro-sub']}>Reliable security for your events</div>
            </div>
          </div>
          <div className={`${styles['svc-intro-item']} ${styles['f-reveal']} ${styles['f-d3']}`} id="si3">
            <div className={styles['svc-intro-num']}>03</div>
            <div>
              <div className={styles['svc-intro-title']}>Door Supervisors</div>
              <div className={styles['svc-intro-sub']}>Entry management &amp; searches</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- MAIN SERVICES --> */}
      <section className={styles['wwd-services']} id="wwd-services">
        <div className={styles['wwd-services-header']}>
          <div className={`${styles['wwd-sh-left']} ${styles['f-reveal']}`}>
            <div className={styles['eyebrow']}>Securing People &amp; Business Assets</div>
            <h2>Security with<br/><em>World-Leading</em><br/>Technology</h2>
            </div>
              <div className={`${styles['wwd-sh-right']} ${styles['f-reveal']} ${styles['f-d2']}`}>
                <p>We deliver intelligent security solutions powered by world-class technology and expertise, helping to create a safer world for you.</p>
                <p>At Big Cat Security Ltd, we provide highly trusted and experienced security guards, door supervisors and event security teams across London and the UK.</p>
              </div>
          </div>

          <div className={styles['wwd-svc-cards']}>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']}`}>
              <div className={styles['wwd-svc-img']}><img src="data:image/jpeg;base64,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" alt="Security Guards"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>01</div>
                <div className={styles['wwd-svc-cat']}>Manned Guarding</div>
                <h3>Security Guards</h3>
                <p>At Big Cat Security Ltd, we provide highly trusted and experienced security guards and door supervisors to protect business environments.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']} ${styles['f-d2']}`}>
              <div className={styles['wwd-svc-img']}><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAC3ARMDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABQABAwQGAgcI/8QARBAAAQMDAQQHBQYFAQcFAQAAAgABAwQREgUhIjFRBhMyQWFxgUJSkaGxFCMzYsHRBxUkcvDhJTQ1Y3OS8UNEU4Ki0v/EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QAJhEAAgIBBAICAwEBAQAAAAAAAAECEQMEEiExBUEyURMiI2E0cf/aAAwDAQACEQMRAD8AO1/RanmyOmLqT8OHwWfq9Ir6LtRZhzDb8l6K7LgoxLtCq6LTzBj95diWJZRliS3NdoVJV7xRWLm2x1na3o3VU+9AXWjy4EgAa1UeWMm8KtRmO6UJ4lzZ7OyHSCcJYSgQFydrJfmHYgDW0Otyw4hV74++3FvRHqepgqo84jYhXnsVYQjhINx7n72VmjlljLr4JXAvD9kXQqN8kzoHQ66JCI1o4/nbgjUZjIOUZMQ82RYNHSSa6e6YhnXFij/tUjumZAHUcjiV/ZUpgEu+zb7M7M6rP93vD8FJHLYrt6ppiaHhnEZOqk3T5fqrRFiq88LSuM8dutBnxfm3JNC5kTdZs8HTIk4tlvF6Lt1wGW3Lns8k7ugYzv7I/wDhJhYf1ddMhmt1o0dAZe9dkm6VglboxXSnUCkqSxPemKzNfgPd8tvqstOe9uqapqyq9QmnIt0N1uV/9G2KqbqKXHJJsrykqNhkqREto8Xbn4KepkUNIByT5Rjci2D58/RSRFlqUykxij3A78Por9NSjCOWIxD8Sf1UtLShSjvWc+932/JSnUEPZC/nZIkkQ1MP2qDEd0h4IFJ19PLjkSPtIRb2KFam+U4ihAzf/wAM4jwrKomuJOIs/N7f6reExcSKzeCEdFaQKLo3SRRta4MZE+y7vtd0TyFyYNpugCSNmyyUl3Sdt3dsy5s3mpdEex7/AJkkt3kkgZQjrIZPax81MziXZJZcHlEe1kpYq84y9pvJUqb9l7x/TNHZM4oZDqnvWL5K5HWwSe1bzUlJMg4tEdXp9PVDjLEJeiz1d0WxyKiO35D2t8VrWcS7JZJOydCPNKqjqqQsZ4CHx4t8VCEhDvRlZemSwBIOMgCQ+KB1/RilqMjgvCfhw+CAMtFVezLfHmyuR19VRRdbQy548Y37L/54KCt0SvoiIsOsDmH7KkBY+Bf53IA2OkdKaSvIYJxemqPcPg/k/BHmdecNJFJj1sTZDwNF6DV6qm9oZYvcd+HqixUbFJlQotVpa3dEsD9x9jq8yYh3UbsQ7w/BSJnQA8M2Pl3spZYmMhmB3uL3dm9puSrO3tCpIpyEvqyaYmjqlmllFmkHHJ3fk7MrfBVpoykcZoCfIX4dxNyXcMnWEWVsm7uSZEktl/avOf4ia2cNcVFC7YQwsztzkLbb0Zmf1Xok0owwHLI+IgLk78mZeEV9Weq66c0pXykeQvPl6MzN6JNIaJox+y0gAXa4v4uqkspF2VLUHkSrG4ikMgNiLdHeIkZ0+MaSMREM5Sbaf6LiipQhxnq9heyHJuatnqNP2RAvoixpEtw/9QbF4OozOnHtEarvWgXZCyc6iLH7wEAO80XZiv6rnRNO/m/SanpS7GWUn9rcfjwVd3HtCt7/AA70T7PBLq9SOJ1G7Cz8WC/H1f5WQBs3YIxERG+LWbuZlJC3eWOXgoCykkxH1VpmxFNCYiZJcu4pXTA6uPupLjIvBJRsKM+8Q+6uHpxU7OndlXwX20UjpfyobqNaenY7z4lzR8AIixEVX1bRir6QoJALa2x2tdn5pOIKXoybdItQhnzjlHDk7fqtHQdJvtFMRyCOQNtb/VYPVNF1XSpN65Rdz47Pio9MrypasftOWJbCbhdTSVcEG3dM9S0zW6evgzxeIr2dn/dEhIJOyTEvMtNllqK46WkqjDbePYz7OSNwz6hS5DPbIX4tdrpOTQ1FNGyIBLtChtdolJV/iRCx++2x/ihsGt1Q9oRMfHj8UfppyqIBlILZJppiaaMfW9GaqnyKmLrh5PsL9kIIZ6eXGUDiLkbWXplxJQ1FFBVDjLEBj4szp0Rs8/jq/eHEubIrSdIq2lIRki+00/e7PvD+6vVvRaIsipDKMuT7RQOo0uvoMiKJyHmG1v3S6GbakrYKscoj9H2O3orF157FUkMokJuBj3tsdkcpekRw4DUxPKHBzBmyHxt+yaYqNLZcXGTslvComqIqqkM6YxMsXs3fe3JDdKllkqxHrbjZ9lrbPNRcqaRKMLTf0GopXAvq3NTHEMv30RYnbbbZfwdQkKQEUZZCrEytqzPdPNTKl0L7LFuVFSJC4Xa7AzbX+nxXl9IAx5EtV/Eeq+09IYosfwqdm9Xe7/KyA0lIdRux4iI8XfgyQJFZgOaQQjHIiRKOkpKUcpSvLz7/AEb/AB1I1EUI4xkzZcXvtdQnTY/mLxdkDoikKkyyLrC8XdRlJSD7J/JI4SLd2ejsqksZ9nFAFnr6D3jb0XBuMg/d9lUDhId5a3oL0dLVZ/tFSP8ARQu1/wDmP7v7/BAFvot0TPUyiq67coge7B3yvy8ufNelYDHGIxjYRazNwZmUgAIiwgLMLNZmtZmZO4ZdpOhWVoGLLIi7+5WnZNGICO78U+bcnTSpCbsWJJ8FGVRGPffy2qE6txAjIbCKOA5LPViksfP0jqnnPqojcL2Z7Okob0S2sq6jUavS1Y9RExw96NUplNAJSDYlh9Q1Kq0apEYK06kCfsSb2zz4rV9H9WDVaIZRDAuDt4qqmuy9tPrsM07YlkrbyqkzqQmJTi+CuSFUSRSDjIIkPiyzOudFqDUR/pBGGoLg7dl/Tgj8zbqqDpU9SMpwVp00rbGbFibhy/ZSYjO6X0YnoBznwGqiK7SAT7Wujk8RTDkRNlbkqVPQ6vHuT1cUpEz2uz2LwuiUUUowCMuwvi3xVSbbtouaSjSYPjpCWh03/dhH3UMBi8CROgf7olKKpkG7RZNskCI6qGTGCd2xd9j7W4o8g888UZnTHDY8ncTZ25oyegh7Hj1SqhIgqYQPH243/RWY9UoqjdI8CLukayGPnHmAkPJ2e1/ioTIpt2QcsG5NsZQ3tE9ifQRn0enrcilFvAw2Ogtb0eqqUSlgPrgFnez7Ct9Ffp4yEetpjOPBmybLZ52XGq6tVUul1REImPVFY+y/DipRkmKabdsxMfSSohnE6YBAgdn4vvNfh6rZ0mqUlIQVg0soRVYgTndnYHfwvzXlIv8AfkOS22hV9PU6IFJU4ZhHLHd+5mdiB/S9lY0UpnoUc0U0WYm2PHbsskNRCRYid/R0IeE6eIopCYz4XbhZQU03VyHvXJuKqllp0jRDT7lbAGv9HdU1HpJUVQ0/9OTswnmN3Zh42vfa/NlSqYToh6qWCSnAdjZg4i788rW+a0dVrrwljfef5Mi1BVjW0mXHJtrPtZCyjenpXZ51JLj7WSqTT9Zura690ZgmiKfTQCGoG7vG2wJPC3Bn8W9ebYGV8SISEgIXdnZ2s7Pyt4OrFJMolFrsqVYkO+JLiKtqI93MiHx2qcyGQVWIRFTKy21R1wl1gjwXpv8ADioD+QSji7m077Gbus1l5SDr0X+HU5w6bVYjl95fbw4JB2b0ZTLtCIet3UU5gO7Jk/g19qp6fPPMRnKACJFYbXd3bmqPSfU6jToBOmxEubtdS9BQZaSbHEQEB8ePwQ2vraiOQQjHPz4fBYyXplrMg4dbG3iwbfrZUT6RapJ2qj/8t+yg7fRKFez0rSeungznxHa9mZu5W6iMcfyry0Okusxx4R1rsP8AaP1svR9JCX7DEVTK5y4tk7972TT4oT7tDBShi26kiFhSS2odnz/mXvF8VLT1tVTFlTVEsRfkJ2UCSZEKh0j1mPs6hL62f9FbDplrw/8AumLzBv8ARZ9JKkFs0o9N9Z9r7O//ANHb9VcpP4hahARFJSQSiTcLuO3nfasckih2zXSdOaiTHGijAgLJrG7+ivwdPKWTdqaSQObs7E37rBJIpD3M9eppYKuAKimMXA2uzrt9YoNMyGuqo4ifgzvtf04rF9Ba4hqZaIj3CbMWfmgevzFUa3VGRZYm7N4NyUUqZJy4PQKvpppY1MXUVBGHtOwuzNtViTU9Cnyl/ndM2fc7s1l5NdK6HBPsSm10estW6RiIhrVKe3uJvihvSDW6fToBipJoa0ahnaRhLst5tzXm7umSWJXY3lbVHqenalDqOkjVRzBDKBsDxG7X4/q21SdKpQm6N1RRk2yN7d3B15RkQ+0S7aaUt3rTx5OTu3wumsdO0DyNrkkoWH7SWQiWT+2zF8uCIUEhFqA0kQAA1ZNGThdntfjy4eCH034pF7t3/wA+CLdFhYtWOqIb/ZgyZvF9n0upSdJsWNXJI9EnqBkyEg7KERF/vE+W6R2b0b900+rRFERxjvCz+fBcBL1dNFEIi+LbX8efxWNnTSrgHz4FUjlvGb7G8FeauKkEYo9mO17KnTx9dUy1Zdnsj5c/iqldUF9p6iPtE138GTqwuuTaadWxVMQllvW7+axHTmnih1KKojs32hnaTxcbbfVns/krVFUTjKIRk4igXSyqOp1TqrPhTNhe2x3fi/0+Csx3ZRnX62C3Pd9nnxURyZbo3wvdr2vfmuTPLHIuy1m4cEmWlIwMkBeifw6qII6StCU2Emdis722W4rzsVq+hlOVTqBiX4IMzyNz27G9UnyNHpOjOMlEEohgJ3dubtfigPTBpZosYwI8dtgZ3damBhGIcREBFrMzdypzw5SFj2S4+SkI8hJy90vDZxXM4zw49bEceXDMXG69ZrqSKqEYuoFgidnF2Ztj80I1HTItT1KEa3bFEz2C9md1F0hpNmI0SlnrdSpxjiM4usbI2F3Fmvz4L2CJsYgHEkIoqenoMYqYAAO5m5onLVjDHkhUNpotXSQn+YX2sOxJFoVM8TSSSQISSa6TIAdK6SZ0AO7pLlK6AD3Q8Ck1+IBK2Quq/SSn+za7VRZZbzP8lz0aOUdfpRiKxmTiz3t3Ir0t0qt/nbkQs4kDXkc2Zmfld3b4KF/tRaop47vkzCSLw6DPJ2pfQIyL5uzN8HU4dGJy7Upj5gP/APTqVorSZn3TOtMPRb3p3+TfukfRT3Zz+T/smmg2sy6e6MV/R+ekpDqhPIIu0EgsLs3Ntrs/xv4ILdO7E1RemqBqJSlGIYxwYMAszcOPq6K9FCEZK3LvYG+qBC/3Hq/1RPRcx67EHcSduHJQmuKLsNuaYYq5AjniEi7TuT8rM/D4qWoq+pg3TEjPY3n/AJtVE266pyIuyDN81AcZFUkBboha3nbis9I38hYKgYYMSLEAb9FUgcd6eQd+V7+TcvRlUqnxIYpZRAOO12u/oq0upjHuxiT/AJ+Cai2uCLlFNKToIz1nUlhEW93ny8FFHIP+OhH20f8A43XTagA+wfyS2S+jpYtVpYKtwbYIpO0AF5szpfYKSTtU8Xo1kKj1eAe0EnwZThrtOPsS/Bv3TUZrojPUaWXdMu/yaiLewIfInRzo5JBoZTFHEUwzWvmTbLeiBUms09ROEEcUzmZMItZtru/DjzWypujdQUeU8oQl7tsnb14JrejNkeja5CMfSSnLt08g+Ts6kHXaEvZkHzFVB6Nj7VYP/YpY+j1OQ3+25eTMytTyGWS0fpsoapr9VGWVDFD1X/Mvd1ao6spJYBlgjyl9xnvwWUrZpS13+XxiLhEe1+Lu30Wt0ykLrxnzcMGs2zihOV8lOZYkv5ht6eIt4gTHTBMOJDup2L82SjeQst0x8lZwZLZI1HCzWwSXDmV+180kcBbPBkySSQxJJJIASSSSAEkuhjMt0Rdy8GurTaXXlEMv2WXAnszu1mvyQFEVFN9nqwnHtA+TbXbb58VpoNWqK3eg0eWoMGbrDF728Ge3qgT6TWw78sWAbLm9rNt4ot0X3qmrhyErOxX5tbioyaonBNugoFbqGP8AwOu/7Xt8bKI9aqI/xNKnHHZtJmR0HIdLlEvZdZWqYuom/wA7lmeanVGhYeLssPruoSFhBpoZDtfOcXs3oqlVresU5CMoUwdazuODOTtZ/OyG6KfU6gA+8zi6sdITxmpS5Zt6bFbue6geNfi3p8oh6yt1WQgKUpJsXxu7MLNfa1uHB37l3F0XqyL7yWMPV3UukMA6pEYbomOLNe7vs43/APC1TNGLZGShlyyi6Ro0ulhlhul2efyURDqEtEJtlFld9tns3LxRzoTGFWNWMpuJDZ25Ie8ox6/WlIGwxlbyu3FT9EJooiqMixN2bi+x2Vk23BlWGCWVLrsITadKUkoxSs01ntfve3BlBoMNRUalT0U7hIDd7jtFmRWpqIsri7u+x+VnVzo1B/tCWoIRyEfm7rNDJb2nRzYFCLmZnpvRNSalEIlcTByYrWvtWcaQsea2n8RGylpJf7x+ixHtLbHo4eS3JtjvMPuuuXkHxScU1lMgPmPurpn/ACrlmUgxlIQiHaN2ZvO/7oA9N6CdFKItPpdXrYjOoJ+sibJ8Rbue3lt2rf2VHTXip6KnpxHEYgYW+CvMQl7SSBnBwxF2gZQyxxUsBmI4iLOrKEdJ6j7Pok+9iRC4t5uhulYJW6MNokJVWqVFUXtm7t6v+y9Fpqco4BEVk+iVJugXvbVt2ZQhzbLMiqkVGafLeAcV07APsK0mdlOiqitaL3RSVjAfdZJFBR89sxe6pY6Wok/DiMvRbSWigh/Cpwx8v1UTmAj2xH1ZVuaRohpsk/irM3Bo1XUFiICPm6st0flEsZTxLwa6NRVUEMuWREXdsdmf1Uc+q9YW5Awl4ldQeZI14/GZ5+qKQaDAP4hG/wAkpdKiyDqBw27fad1JJXzSe63k373UBTSl2pS+LqDzG2HhJv5So0lFNRUVNgMUMRW2mdsiddy63p5aXLTnK5HkzhgLu1/oso6Sr/I/Rsj4fEvk7L9fqQVFMcQge1u92bv5bUN6Ny462Q++HzZI+yqmll1et0+POysxyck7MPkNLjwbdiqz0Jz/AKYxx4ss/MH9NLl7z/RHJN2Pe8WQSdiKI/J1myezPToy1OZR6h/aSudJXyjiP3rv9FQJ+rqy81e1t+s02nPzb5LZ7TM0FeOSK2jzENbCQ+y/6LSlUGXa2rK6W/8AVw+bLU4LJrHUkdfw6X4nf2UTiLrJSjEH63tX4qWGjhEblEF+7Yp2j9ouC7ACLgqHmk0lZ0FpsUW5JdjwQb7Djs8FrNE0944JSEhzIuF9rMgNJF94PmiFZIdFMBxSOJOPFnsrsT2/szHq08qWOLoDfxEj6uKnAgNjY9jvwdrc+HFYB3xJbzpbq1TX6OVPLgQgYlfHbsWDNbsU1JWjganDPFOp9nbsmXXs5JlajOM6PdDqYanVBOQWcafft49yAutB0Icv5pL7vV7VGT4ZZjSclZ6UFb72xW4qwS9pBbroXJVKTRqlhizSBV/mWb6YVvXDFSj7T3dSjUGKBzkdXqWZbwi6HO1QseCnb9Gp6NQjHB/azMtCs/pEojTIi1T+ZWQdIz5U3Jl52TWVYKpTjMBKdlVHSSfIfeSTA8bOYi7ROXm7uo3JcpLm2z6EoJD5EmdJNZAVQ1090rJWSYciTJJIA5NDgP7PqkMvuyM/zRIkIrd2fLxV2Hto4vl4/wA0/o9K1KYJOtOMhIcms/dwZBpfw8vP6KzSn12jgfvAxLjqcqTLxdZ8j4Zk2cKvoxlcONaRDzVuuLLRA/LJ+jqLVR/qfj9VNOP+wsvzs61XxFmDHH5r/ChpL/1dP/e31WxZnL2fNY7SWyqaf/qC3zXoMUIRCLm12+rqrVQ3SRu8ZNRxsFm2Xs2ZlapIHMtm1czPnM5834clYo3+8FZIpWdecns4CdPTDH2u34qnqrcERKQSj3+5tjoTUzPJsV86Sow4dznbBFXT9fSTRe8Nm81ipRxyEuLPZ/NejxRBKLjwXn+pRlHWzAXsyE3zV2ktWjJ5ZJuMvZCH4Yp3Sj/CSWw4oy1vRCjOCCWr3Xz2W72ZZJ0e0WqlhgHqzJiG7N+yhklStmnS43knS7NvHIMnZLe5d6nB0CptShqsRn+5l7jbg7okExx/ibw82VSp8o0yuLqSplqoLq4CLwQqicyzP2SVrUZxKm3S7S5pY8Y4h957pPssjxBthymhxphx3STicuWK5GQhHFO0nvKZkr7LIykPaUwVCjicSXTwh/ap2VtLom65JVupL3kkbw2I8xSSSWI98JMkkkITpnXTDlfw4picfZQRbV0M6a66EDk7Au/0ViOhcu2VvBlFzS7IOSRTd0Or4iHIiF22txWohpgj7AbefF0L16MsiH3gYlPBkufByvJvdiaDHRw+u0KIfaFnH5q+TY0mPZxG6B9EJf6SUPck+v8A4WikbJi8n+iWdU2jLi5xJ/4YTVH/AKuX+53+SmLe0I/ym36LjUQH+bmJdkrX+CJV9KFPo1QA9m7E3/cyttbYIx4YN/kfpJgfRAEdUpRLe37+v/lbyVyxIlhtLAhraSbexKRhv3XvwW+qGxhx5oz8sv0NKFUC3beVilb7xlxZWaZvvFkiuTq5JfqXHfds6FytvIobZCh87bzqckUYXyNTvjiReK891NyLUJstv3hfVbqrcfsxgR4EQP32WClcfeWrTLtnN8pL4ojibdJdWRbQqMa2krYcmY8WIfB+f6IVbHdWlO219HMnjaipemM7InpI5QHvWxJDUa0SLKAy94mZVZ3UDZ4z/oRYOIscx7JcbKxRalPR7hb8XuP+6uHQkMWMZYl48ENljOEsZQt4ttZ1njGS5R0c2bDNuMgu88VTIJRXYS4s/c6J00gDViMhYiLce5kI0yMe16ruHUooaswnHdvbPkrE+bZmyKoVHk1eIkOQlcfBcuyHwmQjnTS5CXdxZWo6wS3ZRwL5KwxluIsfaVoJveVH+1JiQFWXuvH3hSVG6SA2nnySSlCnMvDzWRyS7Z7hyS7IU7MRPYRv5K7HSD7W+/yVoYwjHaPoyqeVeimWZLooR0Msg3N2Bvi6nGmhDgOZcyVjeJOIKp5G+ilzb7ZGwrthUjgS7AFFR5IOY8YoVr9MUhRGI3tGbP4Nsa/xdGmZVtSGcqbOm2mLOLta+Qu1nZacX6tGLUrfBoB9EixkqQ8iWvvut5LO6Bph0UUlRP25d1m91v8AVH2/D9FZmabdFGCDjhSapmH1tv8AaRf2t9EXnA6nRCx2kQMTc32/sqPSCHq9Sy99tiN0jCWnxEPZwZ09384tGfSxuc4v2A6aOoKOiI4uriimFh2Ozm9739OC20w5bEFqYxKKl/LMK0JjuolLdyXxxrE6TB5wuPcpoQIRyUhX4KSLs2JlBJF0ptorV8hR0Uxx7DYXdvNYOXUaoiLrJzy87L0GeFpYiB+yTLM13R5iIiDdVsJqL5RlzYZ5FeN00ZqpqpZvxDI/N3dUCbeRmfSCjIhInVYtOP2Vojlh6ZinodRVtWEOjbDDp+pVWW0I2b4oGTq28k9FBLT5OIzM2Tc1TU0uW/sz5G6UGqodnR/Qx/pDx9okAZlp9Hjx08C967rPqpVA2+Kjee/o11BTfzGgGaIbmG7KHez87KudARF1RB2tm1lS06umoagaimLfbYQvwNv871taGqodahGaPdmCzkL7CF+TowzU4/6GtwTwybrhmXptCqqCKoOTei7m7xWanjIZcZBwMtrP3OvVNU/4eY+81ljqmliqIuqlDyfvb1Vk4p8Mz4cs48pmdp6uopJfuzx8OLP6I5R6rBVYhP8AdH8nQOtpZaIsZN+IuEnJV8lVbx8PlHQjjhqY2uJI2o5x/hlkPLiykCoHsybCWWotUnpt0SzD3H/dHaWtpa0cRKx+4/FWKSfRkyY543TQRzSVbqfzEknRDcjPtEAdkWZSACSS465fJ6lt0SPujdvj3uuWFySSTZBdEoRsPFSsLCkkrIorkxO2S6ZkklJEWSMy6AMhfwZ3SSU0VN8EIN9z6qS/3fo6SSY59MxWpVR1UkQn7DP6rSaW+Wlw+IJJLTkgo41RytC28rJKn8KH/rB9VoUklSujdl7IjFId0fWySSRG+Dp0xR5C/kkkpIQF1GmBu0hJ02JZCkkqJcNnTwyexAPWHYqvAfZFmVBkkl08XwR5TVO88v8A0S2tLB1WnxDyFrpJKjVfFHQ8T82Jm3tmxT08ksUgywGUcrPxZ0klz4Np8HdyxUo8mmptaCrjGmrxwN+yYtdn9FzWURR72648/wDRJJdOLbXJ5nPBY5fqDJ4WkAgkFnEu5AKrTxhLEC2d3gkkoT6L9I6yoomLgWJJxks4uxO3ikkqemdnLCMo8l0NYrRBmad3tzZJJJWbmc/8EPo//9k=" alt="Event Security"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>02</div>
                <div className={styles['wwd-svc-cat']}>Events &amp; Gatherings</div>
                <h3>Event Security</h3>
                <p>We provide expert event security staff who ensure smooth control across events of varying scales and focus, from private functions to large public gatherings.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
            <div className={`${styles['wwd-svc-card']} ${styles['f-reveal-scale']} ${styles['f-d3']}`}>
              <div className={styles['wwd-svc-img']}><img src="data:image/jpeg;base64,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" alt="Door Supervisors"/></div>
              <div className={styles['wwd-svc-body']}>
                <div className={styles['wwd-svc-n']}>03</div>
                <div className={styles['wwd-svc-cat']}>Licensed Premises</div>
                <h3>Door Supervisors</h3>
                <p>At the core of our service are professional SIA door supervisors and rigorously trained personnel managing entry, body and bag searches, and crowd control.</p>
                {/* <a href="/#contact" className="wwd-svc-cta">View Details</a> */}
              </div>
            </div>
          </div>
      </section>

      {/* <!-- PURPOSE / DELIVERS --> */}
      <section className={styles['wwd-delivers']}>
        <div className={styles['wwd-delivers-inner']}>
          <div className={styles['wwd-dleft']}>
            <div className={`${styles['eyebrow']} ${styles['f-reveal']}`}>Big Cat Security Ltd</div>
            <h2 className={`${styles['f-reveal']} ${styles['f-d1']}`}>Delivering Security<br/><em>With a Purpose</em></h2>
            <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>Our safety requires a specialist partner with proven expertise and the resources to respond to any challenge. When security matters most, businesses across London rely on Big Cat Security Ltd.</p>
            <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>From real estate and landmark buildings to critical infrastructure, we have the experience and capacity to deliver complete protection. We also offer Retail security services and Asset protection.</p>
            <div className={`${styles['wwd-tags']} ${styles['f-reveal']} ${styles['f-d3']}`}>
              <span className={styles['wwd-tag']}>Hotels &amp; Theatres</span>
              <span className={styles['wwd-tag']}>High-End Events</span>
              <span className={styles['wwd-tag']}>Late Bars &amp; Restaurants</span>
              <span className={styles['wwd-tag']}>Receptions &amp; Workspaces</span>
              <span className={styles['wwd-tag']}>Overnight Asset Protection</span>
              <span className={styles['wwd-tag']}>Film Sets &amp; Music Videos</span>
            </div>
          </div>
          <div className={styles['wwd-dright']}>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d1']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Monitoring</h4>
                <p>Complete security solutions for 24/7 surveillance — CCTV integration, access control, and real-time monitoring of your premises.</p>
              </div>
            </div>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d2']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Guarding</h4>
                <p>Providing specialist guarding services for offices, buildings, warehouses, retail environments, and shared workspaces across London.</p>
              </div>
            </div>
            <div className={`${styles['wwd-ditem']} ${styles['f-reveal-x']} ${styles['f-d3']}`}>
              <div className={styles['wwd-ditem-dot']}></div>
              <div>
                <h4>Security Consultancy</h4>
                <p>Our consultants highlight any risks or threats to your security and provide practical solutions to deal with these.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- STATS --> */}
      <section className={styles['wwd-stats']}>
        <div className={styles['wwd-stats-grid']}>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d1']}`}>
            <div className={styles['wwd-stat-n']}>85<em>k+</em></div>
            <div className={styles['wwd-stat-l']}>Security Officers</div>
          </div>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d2']}`}>
            <div className={styles['wwd-stat-n']}>25<em>+</em></div>
            <div className={styles['wwd-stat-l']}>Security Clients</div>
          </div>
          <div className={`${styles['wwd-stat-item']} ${styles['f-reveal']} ${styles['f-d3']}`}>
            <div className={styles['wwd-stat-n']}>105<em>+</em></div>
            <div className={styles['wwd-stat-l']}>Monitored Businesses</div>
          </div>
        </div>
      </section>

      {/* <!-- COMPANY STRATEGY --> */}
      <section className={styles['wwd-strategy']}>
        <div className={styles['wwd-strat-header']}>
          <div className={styles['f-reveal']}>
            <div className={styles['eyebrow']}>Company Strategy</div>
            <h2>We Protect<br/>More Than<br/><em>You Think</em></h2>
            </div>
              <p className={`${styles['f-reveal']} ${styles['f-d2']}`}>At Big Cat Security Ltd, we deploy skilled and dependable security guards, door supervisors, and ground teams to ensure safety in offices, buildings, warehouses, and shared workspaces across London and the surrounding area.</p>
          </div>
          <div className={styles['wwd-strat-grid']}>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d1']}`}>
              <div className={styles['wwd-strat-n']}>01</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Service Excellence</h3>
              <p>Deliver consistent, high-quality security services by employing SIA-licensed, well-trained staff who embody professionalism, vigilance, and integrity.</p>
              <a href="/#contact" className={styles['wwd-strat-link']}>Learn More</a>
            </div>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d2']}`}>
              <div className={styles['wwd-strat-n']}>02</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Customer-Centric Approach</h3>
              <p>Build long-term client partnerships by tailoring security solutions for buildings, offices, warehouses, events, and shared workspaces, ensuring peace of mind and satisfaction.</p>
              <a href="/#about" className={styles['wwd-strat-link']}>Learn About Us</a>
            </div>
            <div className={`${styles['wwd-strat-card']} ${styles['f-reveal']} ${styles['f-d3']}`}>
              <div className={styles['wwd-strat-n']}>03</div>
              <div className={styles['wwd-strat-icon']}>
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <h3>Innovation &amp; Technology</h3>
              <p>Leverage modern security technologies such as CCTV integration, access control systems, and real-time communication tools to enhance service delivery.</p>
              <a href="/#contact" className={styles['wwd-strat-link']}>Request a Quote</a>
            </div>
          </div>
      </section>

      {/* <!-- EXPERTS / CTA --> */}
      <section className={styles['wwd-experts']}>
        <div className={styles['wwd-experts-inner']}>
          <div className={`${styles['wwd-exp-left']} ${styles['f-reveal']}`}>
            <div className={styles['eyebrow']} style={{ color: "var(--sea-light)" }}>Speak to Our Experts</div>
            <h2>Ready to Get<br/><span>Protected?</span></h2>
            <p>Our team is available Monday–Friday 9am–6pm, Saturday–Sunday 10am–5pm. All enquiries handled with complete confidentiality and professionalism.</p>
            <a href="tel:+447722143162" className={styles['wwd-exp-phone']}>+44 (0)7722 143162</a>
          </div>
          <div className={`${styles['wwd-exp-right']} ${styles['f-reveal']} ${styles['f-d2']}`}>
            <div className={styles['wwd-newsletter']}>
              <h4>Stay Updated</h4>
              <p>Get the latest news, updates, and insights delivered straight to your inbox.</p>
              <div className={styles['wwd-nl-form']}>
                <input type="email" placeholder="Your email address"/>
                  <button type="button">Subscribe</button>
              </div>
            </div>
            {/* <a href="/#contact" className={styles['btn-pill-white']} style="align-self:flex-start">Request A Quote →</a> */}
          </div>
        </div>
      </section>

      <footer className={styles['footer']}>
        <div className={styles['footer-inner']}>
          <div className={styles['footer-logo']}><img src="/logo.png" alt="Big Cat Security Ltd" /></div>

          <div className={styles['footer-center']}>
            <div className={styles['footer-social']}>
              <a href="https://facebook.com/bigcatsecurity" target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://instagram.com/bigcatsecurity" target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://linkedin.com/company/bigcatsecurity" target="_blank" rel="noopener" className={styles['soc-btn']} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
            <div className={styles['footer-copy']}>© 2022–2026 Big Cat Security Ltd. All Rights Reserved.</div>
          </div>

          <div className={styles['footer-links']}>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <div className={styles['footer-bottom-left']}>
            SIA Licensed · Reg. No. 16568339 · 4 Radcot Point, London SE23 2AZ
          </div>
          <div className={styles['footer-signal']}>
            <div className={styles['footer-signal-dot']}></div>
            System Active · UK Coverage
          </div>
        </div>
      </footer>
    </div>
  );
}
