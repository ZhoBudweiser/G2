import { createNodeGCanvas } from '../utils/createNodeGCanvas';
import { sleep } from '../utils/sleep';
import { basicIntervalChartRender as render } from './basic-interval-chart-render';
import '../utils/useSnapshotMatchers';

describe('chart.render', () => {
  const canvas = createNodeGCanvas(640, 480);

  it('chart.render() should render expected chart', async () => {
    const { finished } = render({ canvas });
    await finished;
    await sleep(20);
    const dir = `${__dirname}/../snapshots-api`;
    await expect(canvas).toMatchCanvasSnapshot(dir, render.name);
  });

  afterAll(() => {
    canvas?.destroy();
  });
});