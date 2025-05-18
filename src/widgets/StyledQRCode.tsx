import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import '../pages/qr/qr.scss';

interface QRCodeProps {
    value: string;
}

export const StyledQRCode: React.FC<QRCodeProps> = ({ value }) => {
    const ref = useRef<HTMLDivElement>(null);

    const qrCode = new QRCodeStyling({
        width: 400,
        height: 400,
        type: 'svg',
        data: value,
        dotsOptions: {
            type: 'dots',
            gradient: {
                type: 'linear',
                rotation: 0,
                colorStops: [
                    { offset: 0, color: '#00BFFF' },
                    { offset: 1, color: '#00FF6A' },
                ],
            },
        },
        cornersSquareOptions: {
            type: 'extra-rounded',
            color: '#00BFFF',
        },
        cornersDotOptions: {
            type: 'dot',
            color: '#00FF6A',
        },
        backgroundOptions: {
            color: '#ffffff',
        },
    });

    useEffect(() => {
        qrCode.update({ data: value });
        if (ref.current) {
            ref.current.innerHTML = '';
            qrCode.append(ref.current);
        }
    }, [value]);

    const handleDownload = () => {
        qrCode.download({
            extension: 'png',
        });
    };

    return (
        <div className="qr">
            <div ref={ref} className="qr_photo" />
            <p className="scan">
                <span className="scan_green">Сканируйте QR </span>код, чтобы сохранить и поделиться результатом!
            </p>
        </div>
    );
};
