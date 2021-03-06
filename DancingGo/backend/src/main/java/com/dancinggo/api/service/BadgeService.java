package com.dancinggo.api.service;

import com.dancinggo.api.response.BadgeRes;
import com.dancinggo.db.entity.Badge;
import com.dancinggo.db.entity.Challenge;

import java.util.List;

public interface BadgeService {

    List<Badge> allBadgeList();

    List<BadgeRes> findAllBadgeList();
}
