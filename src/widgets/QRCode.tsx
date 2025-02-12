import '../pages/qr/qr.scss'

interface QRCodeProps {
    qrImage: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ qrImage }) => (
    <div className="qr">
        <img src={qrImage} alt="QR code" className="qr_photo" />
        <p className="scan">
            <span className="scan_green">Сканируйте QR </span>код, чтобы сохранить и поделиться результатом!
        </p>
    </div>
);