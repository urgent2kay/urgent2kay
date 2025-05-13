import bundle from '../../assets/bundle-icon.svg';
import payment from '../../assets/payment-icon.svg';
import scheduled from '../../assets/scheduled-icon.svg';
import relationship from '../../assets/relationship-icon.svg';


import './Dashboard.css';


interface StatsCardsProps {
    stats: {
        requestsGenerated: number;
        billsSponsored: number;
        billsScheduled: number;
        relationships: number;
    };
    }
    const StatsCards = ({ stats }: StatsCardsProps) => {
        const items = [
            { label: 'Requests Generated', value: stats.requestsGenerated, icon: bundle},
            { label: 'Bills Sponsored', value: stats.billsSponsored, icon: payment},
            { label: 'Bills Scheduled', value: stats.billsScheduled, icon: scheduled},
            { label: 'Relationships', value: stats.relationships, icon: relationship},
        ];
        return (
            <div className="stats-cards">
              {items.map((item, index) => (
                <div key={index} className="stats-cards-card">
                  <div className="stats-cards-header">
                    <h2 className="stats-cards-label">{item.label}</h2>
                    <p className="stats-cards-value">{item.value}</p>
                  </div>
                  <img src={item.icon} alt={`${item.label} icon`} className="stats-cards-icon"/>
                </div>
              ))}
            </div>
          );
        };
        
        export default StatsCards;