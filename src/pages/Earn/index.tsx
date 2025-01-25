import { Community, Content, Header, Rewards } from '@/components'
import { UserSection } from '@/components/UserSection';
import { ComingSoon } from '@/components/ComingSoon';
import { OverlayButton } from '@/components/OverlayButton';
import { useCallback, useMemo, useState } from 'react';

import ArrowLeft from '@/assets/svgs/arrow-left.svg';
import { Tabs } from '@/components/Tabs';
import { HashTag } from './HashTag';

export const Earn = () => {
  const [tabOption, setTabOption] = useState(0);

  const onTabChange = useCallback((option: any) => {
    setTabOption(option)
  }, [setTabOption])

  const tab = useMemo(() => {
    switch(tabOption) {
      case 0:
        return <HashTag />        
    }
  }, [tabOption]);

  return (
    <div>
      <div className="mt-[51px] text-center text-[24px] font-[700]">
        HashTag
        <a className='float-left'>
          <ArrowLeft />
        </a>
      </div>
      <div className='flex justify-center mt-4'>
        <Tabs
          width='294px'
          options={[
            { label: 'HashTag' },
            { label: 'Partners' },
            { label: 'Daily Task' },
            { label: 'Updates' },
          ]}
          onOptionChange={onTabChange}
        />
      </div>
      <div className='mt-[22px]'>
        {tab}
      </div>
    </div>
  )
}

export default Earn
