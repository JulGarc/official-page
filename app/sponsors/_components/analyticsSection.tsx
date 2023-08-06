import { Icon, IconCatalog } from '@/components';
import cn from 'classnames';

const classes = {
  yellowIcon: cn('bg-primary text-stone-900 p-3 rounded-2xl'),
  analyticTitle: cn('text-3xl font-medium mt-20 mb-8 text-center lg:text-left'),
  analyticDivider: cn('grid grid-cols-2 items-center lg:items-start gap-8'),
  analyticCard: cn('flex gap-4 items-start py-5 px-2 md:px-10 bg-base-100 rounded-md shadow-xl w-full h-full'),
  analyticCardTitle: cn('text-xl font-bold mb-1'),
  analyticCardText: cn('text-base font-normal'),
};

const events = [
  {
    title: 'Charlas mensuales',
    text: 'Son dos charlas de aproximadamente 40 minutos de duración, que se van a dar el mismo día. Estas charlas están propuestas por los miembros de la comunidad que quieren compartir su conocimiento.',
  },
  {
    title: 'Eventos en vivo',
    text: 'Cada evento que hacemos es trasmitido en vivo en twitch con iteraccion del publico. Estos eventos estan disponibles dias despues en youtube.',
  },
];

const analytics = [
  'Reuniones mensuales',
  'Más de 70 asistentes presenciales a cada evento',
  'Más de 200 asistentes online en cada evento',
  'Invitados expertos',
];

export const AnalyticsSection = () => (
  <>
    <section>
      <h2 className={classes.analyticTitle}>Nuestras iniciativas</h2>
      <div className={classes.analyticDivider}>
        {events.map((event) => (
          <article key={event.title} className={classes.analyticCard}>
            <span className={classes.yellowIcon}>
              <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
            </span>
            <div className="flex items-start flex-col justify-center">
              <h3 className={classes.analyticCardTitle}>{event.title}</h3>
              <p className={classes.analyticCardText}>{event.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section>
      <h2 className={classes.analyticTitle}>Estadísticas</h2>
      <div className={classes.analyticDivider}>
        {analytics.map((data) => (
          <article key={data} className={cn(classes.analyticCard, 'items-center')}>
            <span className={classes.yellowIcon}>
              <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
            </span>
            <div>
              <h3 className={classes.analyticCardTitle}>{data}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);
