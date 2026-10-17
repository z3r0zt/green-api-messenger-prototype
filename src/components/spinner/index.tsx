import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import styles from './styles.module.scss';

export const Spinner = ({ fontSize = 25 }: { fontSize?: number }) => {
  return (
    <div className={styles.spinnerContainer}>
      <Spin className={styles.spinner} indicator={<LoadingOutlined spin style={{ fontSize }} />} size='large' />
    </div>
  )
}