import React from 'react';

// Fancy React Loading Library
import { useLoading, Circles } from '@agney/react-loading';

export default function LoadSpinner() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Circles width="135" />,
    });

    return (
        <section
            className="spinnerCenter"
            id="authLoadSpinner"
            {...containerProps}
        >
            {indicatorEl}
        </section>
    );
}
