'use client';

import { Suspense } from 'react';
import NavbarItemContent from './NavbarItemContent';

export default function NavbarItem({ title, param }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavbarItemContent title={title} param={param} />
        </Suspense>
    );
}
