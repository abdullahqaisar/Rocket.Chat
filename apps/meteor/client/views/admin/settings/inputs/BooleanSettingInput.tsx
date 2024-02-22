import { Box, Field, FieldLabel, FieldRow, Tag, ToggleSwitch } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement, SyntheticEvent } from 'react';
import React from 'react';

import ResetSettingButton from '../ResetSettingButton';

type BooleanSettingInputProps = {
	_id: string;
	label: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	value: boolean;
	enterprise?: boolean;
	hasResetButton: boolean;
	onChangeValue: (value: boolean) => void;
	onResetButtonClick: () => void;
};
function BooleanSettingInput({
	_id,
	label,
	disabled,
	readonly,
	required,
	value,
	enterprise,
	hasResetButton,
	onChangeValue,
	onResetButtonClick,
}: BooleanSettingInputProps): ReactElement {
	const t = useTranslation();

	const handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
		const value = event.currentTarget.checked;
		onChangeValue?.(value);
	};

	return (
		<Field>
			<FieldRow marginBlockEnd={8}>
				<FieldLabel htmlFor={_id} title={_id} required={required}>
					<Box is='span' mie={4}>
						{label}
					</Box>
					{enterprise && <Tag variant='primary'>{t('Enterprise')}</Tag>}
				</FieldLabel>
				<Box display='flex' alignItems='center'>
					{hasResetButton && <ResetSettingButton mie={8} data-qa-reset-setting-id={_id} onClick={onResetButtonClick} />}
					<ToggleSwitch
						data-qa-setting-id={_id}
						id={_id}
						checked={value === true}
						disabled={disabled || readonly}
						onChange={handleChange}
					/>
				</Box>
			</FieldRow>
		</Field>
	);
}

export default BooleanSettingInput;
