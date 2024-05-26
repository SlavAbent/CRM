//https://reactsvgicons.com/typicons

export const Kanban = ({
    className,
    width,
    height,
  }: {
    className?: string;
    width?: number;
    height?: number;
  }): JSX.Element => (
    <svg className={className} width={width || 24} height={height || 24}>
      <path d="M13 5l.855 3.42 3.389-.971 1.501 2.6-2.535 2.449 2.535 2.451-1.5 2.6-3.39-.971L13 20h-3l-.855-3.422-3.39.971-1.501-2.6 2.535-2.451-2.534-2.449 1.5-2.6 3.39.971L10 5h3m0-2h-3c-.918 0-1.718.625-1.939 1.516l-.354 1.412-1.4-.4a2 2 0 00-2.283.922l-1.5 2.6a2 2 0 00.342 2.438l1.047 1.011-1.048 1.015a2 2 0 00-.343 2.438l1.502 2.6a1.997 1.997 0 002.283.924l1.399-.401.354 1.415A2 2 0 0010 22h3c.918 0 1.718-.625 1.939-1.516l.354-1.414 1.399.4a2 2 0 002.283-.923l1.5-2.6c.459-.796.317-1.8-.342-2.438l-1.047-1.013 1.047-1.013a2 2 0 00.342-2.438l-1.5-2.6a2 2 0 00-2.283-.924l-1.4.401-.354-1.413A1.997 1.997 0 0013 3zm-1.5 7.5a2 2 0 110 4 2 2 0 010-4m0-1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
    </svg>
  );

export const Dashboard = ({
    className,
    width,
    height,
  }: {
    className?: string;
    width?: number;
    height?: number;
  }): JSX.Element => (
    <svg className={className} width={width || 24} height={height || 24}>
      <path d="M17 21H7c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zM7 5c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1H7zm9 6H8a.5.5 0 010-1h8a.5.5 0 010 1zm0-3H8a.5.5 0 010-1h8a.5.5 0 010 1zm0 6H8a.5.5 0 010-1h8a.5.5 0 010 1zm0 3H8a.5.5 0 010-1h8a.5.5 0 010 1z" />
    </svg>
  );

export const Chat = ({
    className,
    width,
    height,
  }: {
    className?: string;
    width?: number;
    height?: number;
  }): JSX.Element => (
    <svg className={className} width={width || 24} height={height || 24}>
      <path d="M16.5 8h-2.086l1.293-1.293a.999.999 0 10-1.414-1.414L10.586 9l3.707 3.707a.997.997 0 001.414 0 .999.999 0 000-1.414L14.414 10H16.5c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3H8c-1.654 0-3-1.346-3-3s1.346-3 3-3a1 1 0 100-2c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c2.757 0 5-2.243 5-5s-2.019-5-4.5-5z" />
    </svg>
  );

export const Profile = ({
    className,
    width,
    height,
  }: {
    className?: string;
    width?: number;
    height?: number;
  }): JSX.Element => (
    <svg className={className} width={width || 24} height={height || 24}>
      <path d="M22.3 8h-2.4c-.4-1.2-1.5-2-2.8-2h-6c0-1.1-.9-2-2-2H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3L23 9c.1-.6-.2-1-.7-1zM4 9V7c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1H6.9c-.6 0-1.1.4-1.3 1L4 16.3V9zm14.9 7.5c-.2.8-1.1 1.5-1.9 1.5H5s-.4-.2-.2-.8l1.9-7c0-.1.2-.2.3-.2h13.7l-1.8 6.5z" />
    </svg>
  );