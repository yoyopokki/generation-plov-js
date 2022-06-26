import GenerationPlov from '@/generation-plov';
import elementFactory from '@/virtual-dom/element-factory';
import Header from '@/test-components/header';

new GenerationPlov(
  elementFactory(Header, {}, []),
  document.getElementById('root')
);

export default {};
