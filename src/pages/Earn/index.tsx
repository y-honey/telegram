import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { ComingSoon } from '@/components/ComingSoon';
import { OverlayButton } from '@/components/OverlayButton';
import BackLogo from '@/assets/images/Group 1000002443.png';
import { Switch } from '@/components/Switch';
import { useCallback, useState } from 'react';

import ArrowLeft from '@/assets/svgs/arrow-left.svg';

export const Earn = () => {
  const [tabOption, setTabOption] = useState(0);

  const onTabChange = useCallback((option: any) => {
    setTabOption(option)
  }, [setTabOption])

  return (
    <div>
      <div className="mt-[51px] text-center">
        HashTag
        <a className='float-left'>
          <img src={ArrowLeft} />
        </a>
      </div>
      <div className="mt-[22px] w-full text-center">
        <p className='font-[800] text-[32px]'>Balance: 10 $HTC</p>
      </div>
      <div className='flex justify-center mt-3'>
        <Switch
          width='294px'
          options={[
            { label: 'Buy with TON' },
            { label: 'Buy with Stars' },
          ]}
          onOptionChange={onTabChange}
        />
      </div>
      <div className='mt-[36px]'>
        {tabOption == 0 ? "" : ""}
      </div>
      <div className='relative top-[-72px] flex justify-center items-center'>
        <img src={BackLogo}/>
      </div>
    </div>
  )
}

export default Earn
