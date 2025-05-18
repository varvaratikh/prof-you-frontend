import { QRCodeSVG } from 'qrcode.react';
import '../pages/qr/qr.scss';

interface QRCodeProps {
    value: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ value }) => (
    <div className="qr">
        <QRCodeSVG value={value} size={400} bgColor="#1d1d1d"
                   fgColor="#00FF6A"
                   includeMargin={true}
                   className="qr_svg"/>
        <p className="scan">
            <span className="scan_green">Сканируйте QR </span>код, чтобы сохранить и поделиться результатом!
        </p>
    </div>
);
