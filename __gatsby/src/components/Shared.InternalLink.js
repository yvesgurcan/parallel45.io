import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export default ({ children, onClick, to, ...props }) => {
    <Link
        to={to}
        {...props}
        onClick={event => {
            trackCustomEvent({
                category: 'Inbound Link',
                action: 'click',
                label: to
            });
            if (onClick) {
                return onClick(event);
            }
        }}
    >
        {children}
    </Link>;
};
