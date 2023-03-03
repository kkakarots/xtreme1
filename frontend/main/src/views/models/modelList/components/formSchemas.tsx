import { FormSchema } from '/@/components/Form/index';
import { datasetTypeEnum } from '/@/api/business/model/datasetModel';
import { useI18n } from '/@/hooks/web/useI18n';
import Icon, { SvgIcon } from '/@/components/Icon';
import { Button, Input, Tooltip } from 'ant-design-vue';
const { t } = useI18n();
export const createForm: FormSchema[] = [
  {
    required: true,
    field: 'name',
    component: 'Input',
    label: t('business.models.modelName'),
    componentProps: {
      placeholder: 'Please enter a model name',
    },
    rules: [
      { required: true, message: 'Please enter a model name' },
      {
        max: 255,
        message: `${t('business.models.modelName')} ${t('business.dataset.nameError')}`,
        trigger: 'change',
      },
    ],
  },
  {
    field: 'datatype',
    label: t('business.models.dataType'),
    component: 'ApiRadioGroup',
    componentProps: {
      options: [
        { label: 'Image', value: 'Image' },
        {
          label: (
            <span>
              <span> LIDAR </span>
              <Tooltip placement="rightTop" title={t('business.models.create.lidarTips')}>
                <Icon size={'15'} icon={'uiw:information'} />{' '}
              </Tooltip>
            </span>
          ),
          value: 'LIDAR',
        },
      ],
    },
    required: true,
    defaultValue: 'Image',
  },
  {
    field: 'modaltype',
    // renderColContent: () => <div>232</div>,
    label: t('business.models.modelType'),
    component: 'ApiRadioGroup',
    componentProps: {
      options: [{ label: 'Detection', value: 'Detection' }],
    },
    defaultValue: 'Detection',
  },
  {
    field: 'Description',
    label: ' ',
    component: 'Input',
    colSlot: 'description',
    colProps: { lg: 24 },
  },
];
