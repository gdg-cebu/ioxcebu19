import style from './style';
import ButtonLink from '../button-link';
import logo from '../../images/io.svg';

const HeroBlock = () => (
    <section class={style.hero}>
        <div class={style.details}>
            <img class={style.logo} src={logo} alt="Google I/O Logo" />
            <h2>
                I/O brings together developers from around the globe for talks, hands-on
                learning with Google experts, and a first look at Google’s latest developer products.
            </h2>

            <h3>July 20, 2019 &middot; J Centre, Mandaue City</h3>

            <ButtonLink href="https://www.eventbrite.com/e/google-io-extended-cebu-2019-tickets-63569676614">Register Now</ButtonLink>
        </div>

        <img class={style.heroImage} src="/assets/hero-image.jpg" alt="Google I/O Extended Cebu 2019" />
    </section>
);

export default HeroBlock;
