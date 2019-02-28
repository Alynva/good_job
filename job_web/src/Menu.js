import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';

// import { VisitorIcon } from './visitors';
// import { CommandIcon } from './commands';
// import { ProductIcon } from './products';
// import { CategoryIcon } from './categories';
import { ReviewIcon } from './reviews';

const items = [
    // { name: 'customers', icon: <VisitorIcon /> },
    // { name: 'segments', icon: <LabelIcon /> },
    // { name: 'commands', icon: <CommandIcon /> },
    // { name: 'products', icon: <ProductIcon /> },
    // { name: 'categories', icon: <CategoryIcon /> },
    { name: 'reviews', icon: <ReviewIcon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to="/reviews"
                primaryText="Mensagens"
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
