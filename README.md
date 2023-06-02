# container_tree_graph

## 놀랍게도 컨테이너가 사라져버린!!!!!!!

## [배포 페이지](https://chichoon.github.io/container_tree_graph/)

내가 만든 트리 어떻게 생겼는지 모르겠어서 컨테이너를 못하겠어

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/216510292-fb098757-1a2c-49c9-adc1-6c95204be42c.png">

그래서 만듦 (하라는 컨테이너는 안하고)

## 사용방법

```cpp
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.cpp                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jiychoi <jiychoi@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/23 15:09:50 by jiychoi           #+#    #+#             */
/*   Updated: 2023/02/01 10:36:53 by jiychoi          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "./includes/ft_containers.hpp"
#include "./includes/tree.hpp"

#include <string>
#include <iostream>

void	print_recursive (ft::Node<std::string, std::string>* node, std::string& str) {
	if (node->parent && node->parent->value.first.length() != 0)
		str += node->parent->value.first;
	if (node->value.first.length() != 0)
		str += "," + node->value.first + "\n";
	if (!node->child_left && !node->child_right) return;
	if (node->child_left) print_recursive(node->child_left, str);
	if (node->child_right) print_recursive(node->child_right, str);
}

void	print_tree (ft::Tree<std::string, std::string>* tree) {
	ft::Node<std::string, std::string>*	node = tree->root();
	std::string							str = "";

	print_recursive(node, str);
	std::cout << str;
}

int main (void) {
	ft::Tree<std::string, std::string>*	tree = new ft::Tree<std::string, std::string>();
	// 트리에 insert, delete, rotate 등 테스트하고 싶은 것 추가
	print_tree(tree);
}

```

위 코드를 돌린 결과값을 웹에 복붙합니다.

버튼을 누르고 출력된 그래프를 봅니다.

머메이드 쵝오

## 추가할 예정인 기능

웹에서 헤더 파일만 복붙하면 자동으로 돌려주는 테스터를 만드는 게 로망인데 할 수 있을 지 잘 모르겠음...

지금은 특정 메인문을 로컬에서 컴파일하고 실행시킨 결과값을 복사 붙여넣기 해야 하는 번거로움이 있는데요 솔직히 좀 귀찮잖아요

## 버그 리포트

저 혼자 쓰려고 만든 거긴 한데 혹시 본인 헤더로 돌렸을 때 이상현상이나 버그가 있으면 슬랙 @jiychoi 로 제보를 해주세요
