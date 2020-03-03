import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ActionBar = React.forwardRef(({
    actions,
    actionClassNames,
    actionProps,
    className,
    buttonContainerClassNames,
    buttonProps,
    description,
    descriptionProps,
    disableStyles,
    headingLevel,
    title,
    titleProps,
    onClick,
    ...props
}, ref) => {

    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/action-bar.css');
        }
    }, []);

    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    const actionBarBackClasses = classnames(
        'fd-action-bar__back',
        buttonContainerClassNames
    );

    const actionBarDescriptionClasses = classnames(
        'fd-action-bar__description',
        {
            'fd-action-bar__description--back': onClick
        }
    );

    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        actionClassNames
    );

    const HeadingTag = `h${headingLevel}`;

    return (
        <div {...props}
            className={actionBarClasses}
            ref={ref}>
            <div {...props} className={actionBarHeaderClasses}>
                {onClick && (<div className={actionBarBackClasses}>
                    <Button
                        {...buttonProps}
                        compact
                        disableStyles={disableStyles}
                        glyph='navigation-left-arrow'
                        onClick={onClick}
                        option='transparent' />
                </div>)}
                <HeadingTag {...titleProps} className='fd-action-bar__title'>{title}</HeadingTag>
                {actions && (
                    <div {...actionProps} className={actionBarActionsClasses}>{actions}</div>
                )}
            </div>
            {description &&
                <p
                    {...descriptionProps}
                    className={actionBarDescriptionClasses}>{description}</p>
            }
        </div>
    );
});

ActionBar.displayName = 'ActionBar';

ActionBar.propTypes = {
    title: PropTypes.string.isRequired,
    actionClassNames: PropTypes.string,
    actionProps: PropTypes.object,
    actions: PropTypes.node,
    buttonContainerClassNames: PropTypes.string,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    description: PropTypes.string,
    descriptionProps: PropTypes.object,
    disableStyles: PropTypes.bool,
    headingLevel: CustomPropTypes.range(1, 6),
    titleProps: PropTypes.object,
    onClick: PropTypes.func
};

ActionBar.defaultProps = {
    headingLevel: 3
};

ActionBar.propDescriptions = {
    actionClassNames: 'Classnames to spread to the action Button container.',
    actionProps: 'Props to spread to the action Button container',
    actions: 'Button components to add to the ActionBar.',
    buttonContainerClassNames: 'Classnames to spread to the back Button container.',
    description: 'Localized text for the description.',
    descriptionProps: 'Additional props to be spread to the description\'s `<p>` element.',
    headingLevel: 'Heading level. `<h1>` is reserved for the page title.',
    onClick: 'Callback to pass to the back Button container.'
};


export default ActionBar;
