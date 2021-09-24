import { FormControlSize } from 'petals-ui/dist/form-control';
import { IInputComponent, InputHeadlessComponent } from 'petals-ui/dist/input';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Input as IvuInput } from 'view-design';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('input'),
})
export default class Input
  extends BaseStructuralComponent<InputHeadlessComponent>
  implements IInputComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: String, default: '' })
  public readonly value!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: String, default: 'medium' })
  public readonly size!: FormControlSize;

  @Prop({ type: Number })
  public readonly minLength!: number;

  @Prop({ type: Number })
  public readonly maxLength!: number;

  @Prop({ type: String, default: 'text' })
  public readonly type!: string;

  @Prop({ type: Boolean, default: false })
  public readonly showWordLimit!: boolean;

  public render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      type: this.type,
      showWordLimit: this.showWordLimit,
    };

    if (this.size === 'large' || this.size === 'small') {
      props.size = this.size;
    }

    if (this.maxLength) {
      props.maxlength = this.maxLength;
    }

    if (this.minLength) {
      props.minlength = this.minLength;
    }

    return h(IvuInput, { props });
  }

  public created(): void {
    this.setHeadlessComponent(new InputHeadlessComponent(this));
  }
}
