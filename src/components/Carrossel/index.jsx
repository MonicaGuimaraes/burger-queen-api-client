// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './carrossel.module.css'
export default function CarouselComponente(img){

    return (
        <Carousel>
            <div className={styles.Divimg}>
                <img className={styles.imgCarrosel} src="https://cdn.discordapp.com/attachments/951913651059716138/984263230903971850/hamburguer-angus-fatias-redondas-bacon-mobile.jpg" />
               
            </div>
            <div className={styles.Divimg}>
                <img className={styles.imgCarrosel} src="https://cdn.discordapp.com/attachments/951913651059716138/984263204903456768/korin-hamburguer-picanha-faca-20190704-horizontal_2.png" />
                
            </div>
            <div className={styles.Divimg}  >
                <img  className={styles.imgCarrosel} src="https://cdn.discordapp.com/attachments/951913651059716138/984263104558948434/2307988_1eb6a47e795ab2e_1.png" />
                
            </div>
        </Carousel>
    );

}