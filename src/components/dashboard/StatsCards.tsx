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
            { label: 'Requests Generated', value: stats.requestsGenerated},
            { label: 'Bills Sponsored', value: stats.billsSponsored},
            { label: 'Bills Scheduled', value: stats.billsScheduled},
            { label: 'Relationships', value: stats.relationships},
        ];
        return(
            <div className='stats-cards'>
                {items.map((item, index) => (
                    <div key={index} className='card'>
                        <h2>{item.label}</h2>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        );
    };
export default StatsCards;