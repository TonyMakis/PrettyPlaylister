import React from 'react';

import { useLoading, Circles } from '@agney/react-loading';

export default function LoadSpinner() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Circles width="155" />,
    });

    return (
        <section
            className="central"
            id="authLoadSpinner"
            {...containerProps}
        >
            {indicatorEl}
        </section>
    );
}
