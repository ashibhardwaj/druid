/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MenuItem } from '@blueprintjs/core';
import { render } from '@testing-library/react';

import { MoreButton } from './more-button';

describe('MoreButton', () => {
  it('matches snapshot (full)', () => {
    const moreButton = (
      <MoreButton>
        <MenuItem text="LOL 1" />
        <MenuItem text="LOL 2" />
      </MoreButton>
    );

    const { container } = render(moreButton);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot (empty)', () => {
    const moreButton = <MoreButton>{null}</MoreButton>;

    const { container } = render(moreButton);
    expect(container.firstChild).toMatchSnapshot();
  });
});
