import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ListItem = ({
    className,
    children,
    onClick,
    selected,
    ...props
}) => {

    let [isSelected, setIsSelected] = useState(selected);

    const handleClick = (e) => {
        setIsSelected(!isSelected);
        onClick(e);
    };

    const ListItemClasses = classnames(
        'fd-list__item',
        {
            'is-selected': isSelected
        },
        className
    );

    return (
        <li
            {...props}
            aria-selected={isSelected}
            className={ListItemClasses}
            onClick={handleClick}
            role='option'
            tabIndex='0'>
            {children}
        </li>

    );
};

ListItem.displayName = 'List.Item';

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

ListItem.defaultProps = {
    onClick: () => {},
    selected: false
};

ListItem.propDescriptions = {
    selected: 'Set to **true** to set state of the list item to "selected".'
};

export default ListItem;
